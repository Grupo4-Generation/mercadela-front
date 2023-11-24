import { ArrowCircleDown } from '@phosphor-icons/react';

import Categoria from '../../../models/Categoria'

import "./CardCategoria.css"
import { Link } from 'react-router-dom';
import ModalDelete from '../modal/ModalDelete';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';


interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    
    const {usuario} = useContext(AuthContext)

    return (
        <div className='flex h-[20vh] justify-center'>
            <p className='flex text-3xl text-[#C24730] font-bold'>{categoria.nomeCategoria}</p>
            
            {usuario.generoUsuario === "Admin"? (<div id='dropCat'>
                
                <button>
                    <ArrowCircleDown size={26} weight="bold" className='dropIcon' />
                </button>
                <div className='dropFilha'>
                    <Link to={`/editarCategoria/${categoria.id}`}>
                        <button className='editar'>Editar</button>
                    </Link>

                    <ModalDelete id={categoria.id}/>
                </div>
            </div>) : null}
        </div>
    )
}

export default CardCategorias;