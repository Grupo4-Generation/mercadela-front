import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import { toastAlerta } from "../../../util/toastAlerta";
import Category from "../../../models/Category";
import { CreateWitchToken, FindWitchToken, Update } from "../../../services/Service";


function CategoryForm() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [category, setCategory] = useState<Category>({} as Category);

    const { id } = useParams<{ id: string }>();

    const { user, handleLogout } = useContext(AuthContext);
    const token = user.token;

    async function buscarPorId(id: string) {
        try {
            await FindWitchToken(`/category/${id}`, setCategory, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta("O token expirou, favor logar novamente","info")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta("Você precisa estar logado","erro");
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        })
    }

    async function createCategory(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        navigate('/loadCategory')

        if (id !== undefined) {
            try {
                await Update(`/category`, category, setCategory, {
                    headers: {
                        'Authorization': token
                    }
                })
                navigate('/loadcategory')
                toastAlerta("category atualizada com sucesso","sucesso")

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta("O token expirou, favor logar novamente","info")
                    handleLogout()
                } else {
                    toastAlerta("Erro ao atualizar a category","erro")
                }
            }

        } else {
            try {
                await CreateWitchToken(`/category`, category, setCategory, {
                    headers: {
                        'Authorization': token
                    }
                })
                toastAlerta('category cadastrada com sucesso', 'sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', 'erro')
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar a category', 'erro')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/category")
    }

    return (
        <div className="bg-[#FEEAE0] rounded-3xl pt-4 pb-8 font-fontProjeto w-[40vw] flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-[#DB5413] text-center my-4">
                {id === undefined ? 'Cadastrar category' : 'Editar category'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={createCategory}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="n" className="text-[#DB5413] font-bold">Nome da category</label>
                    <input
                        type="text"
                        name='name'
                        placeholder="Digite o nome da category"
                        className="p-1 border border-gray-300 rounded-2xl px-3"
                        value={category.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>
                <div className="flex flex-col gap-2 pb-4">
                    <label htmlFor="description" className ="text-[#DB5413] font-bold">Descrição da category</label>
                    <input
                        type="text"
                        name='description'
                        placeholder="Digite a descrição da category"
                        className="p-1 border border-gray-300 rounded-2xl px-3"
                        value={category.description}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>
                <button
                    className="w-auto self-center text-2xl text-white font-bold rounded-3xl pt-[5px] px-2 bg-[#13DBB7] hover:bg-[#0F9D84]" type="submit">

                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>Confirmar</span>
                    }
                </button>
            </form>
        </div>
    )
}

export default CategoryForm