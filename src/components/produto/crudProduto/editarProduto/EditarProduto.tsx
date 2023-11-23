import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthContext';
import Categoria from '../../../../models/Categoria';
import Produto from '../../../../models/Produto';
import { buscar, atualizar, cadastrar } from '../../../../services/Service';

function EditarProduto() {
    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nomeCategoria: '',
        descricaoCategoria: '',
    });

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nomeProduto: '',
        descricaoProduto: '',
        fotoProduto: '',
        precoProduto: 0,
        idCategoria: null,
        usuario: null
    });

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produto/${id}`, setProduto, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function buscarCategoriaPorId(id: string) {
        await buscar(`/categoria/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function buscarCategorias() {
        await buscar('/categoria', setCategorias, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setProduto((prevProduto) => ({
            ...prevProduto,
            idCategoria: categoria,
        }));
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setProduto((prevProduto) => ({
            ...prevProduto,
            [name]: value,
        }));
    }

    function retornar() {
        navigate('/');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log({ produto });

        if (id !== undefined) {
            try {
                console.log({ produto });
                await atualizar(`/produto`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });
                alert('Produto atualizado com sucesso');
                retornar();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao atualizar o Produto');
                }
            }
        } else {
            try {
                await cadastrar(`/produto`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert('Produto cadastrado com sucesso');
                retornar();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar o Produto');
                }
            }
        }
    }

    const carregandoCategoria = categoria.nomeCategoria === '';

    return (
        <div className="container flex flex-col overflow-y-auto min-h-full mx-auto items-center">
            <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

            <form onSubmit={gerarNovoProduto} className="flex flex-col  gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nomeProduto">Nome do Produto</label>
                    <input
                        value={produto.nomeProduto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Nome do Produto"
                        name="nomeProduto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricaoProduto">Descrição do Produto</label>
                    <input
                        value={produto.descricaoProduto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Descrição do Produto"
                        name="descricaoProduto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="precoProduto">Preço Do Produto</label>
                    <input
                        value={produto.precoProduto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="number"
                        placeholder="Preço do Produto"
                        name="precoProduto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="fotoProduto">Foto do Produto</label>
                    <input
                        value={produto.fotoProduto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="url"
                        placeholder="Foto do Produto"
                        name="fotoProduto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
  <label htmlFor="idCategoria">Categoria do Produto</label>
  <select
   name="idCategoria"
   id="idCategoria"
   className='border p-2 border-slate-800 rounded'
   onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
   value={produto.idCategoria?.id || ''}
 >
   <option value="" disabled>Selecione uma categoria</option>
   {categorias.map((categoria) => (
     <option key={categoria.id} value={categoria.id}>{categoria.nomeCategoria}</option>
   ))}
  </select>
</div>

                <button
                    disabled={carregandoCategoria}
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'
                >
                    {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default EditarProduto;
