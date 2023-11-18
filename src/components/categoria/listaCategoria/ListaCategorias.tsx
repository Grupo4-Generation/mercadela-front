import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';

import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

import Categoria from '../../../models/Categoria';
import CardCategoria from '../cardCategoria/CardCategorias';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import FormularioCategoria from '../formularioCategoria/FormularioCategoria';

function ListaCategorias() {

    const [categoria, setCategoria] = useState<Categoria[]>([]);

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarCategoria() {
        try {
            await buscar('/categoria', setCategoria, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Erro, tente novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert("Sessão expirada...");
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        buscarCategoria()
    }, [categoria.length])

    return (
        <>
            {categoria.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="font-fontProjeto font-bold container z-0 w-[80vw] h-[100vh] px-[1vw] mx-auto my-0 grid grid-cols-3 gap-4">

                <div className='col-span-3 flex justify-between items-center'>
                    <div className='px-4 py-2 text-2xl text-white bg-[white] hover:bg-[#0F9D84]'></div>
                    
                    <h1 className='text-center text-6xl text-[#DB5413] font-bold'>Categorias</h1>

                    <Popup
                        trigger={
                            <button
                                className='flex justify-items-end border rounded-[35px] px-4 py-2 text-2xl text-white bg-[#13DBB7] hover:bg-[#0F9D84]'>
                                + criar
                            </button>
                        }
                        modal
                    >
                        <FormularioCategoria />
                    </Popup>
                </div>

                {categoria.map((categoria) => (
                    <>
                        <CardCategoria key={categoria.id} categoria={categoria} />
                    </>
                ))}

            </div>
        </>
    )
}

export default ListaCategorias;