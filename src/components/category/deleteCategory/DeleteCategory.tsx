import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../../contexts/AuthContext";

import category from "../../../models/Category";
import { RotatingLines } from "react-loader-spinner";
import { toastAlerta } from "../../../util/toastAlerta";
import Category from "../../../models/Category";
import { Delete, FindWithToken } from "../../../services/Service";

interface DeleteProps {
    id: number
}

function DeleteCategory({id} : DeleteProps) {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [category, setCategory] = useState<Category>({} as category)

    const { user, handleLogout } = useContext(AuthContext)
    const token = user.token

    async function FindById() {
        try {
            await FindWithToken(`/category/${id}`, setCategory, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'erro')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'erro')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            FindById()
        }
    }, [id])

    async function deleteCategory() {
        setIsLoading(true)
        navigate('/loadcategory')

        try {
            await Delete(`/category/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });

            toastAlerta('category apagada com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar category', 'erro')
        }

        setIsLoading(false)
        back()
    }

    function back() {
        navigate("/category")
    }

    return (
        <div className='font-fontProjeto p-4 container w-[60vw] mx-auto bg-[#FEEAE0] rounded-3xl'>
            <h1 className='font-bold text-4xl text-center my-4 text-[red]'>Deletar category</h1>

            <p className='text-center font-semibold mb-4 text-[red]'>
                Você tem certeza de que deseja <br></br>apagar a category a seguir?
            </p>

            <div className='text-center flex flex-col overflow-hidden justify-between'>
                <p className='p-8 text-3xl h-full text-[#DB5413] font-bold'>{category.name}</p>

                <div className="flex space-x-[10vw] self-center">

                    <button
                        className='font-bold text-slate-100 bg-[#13DBB7] hover:bg-[#0F9D84] 
                            flex items-center justify-center px-5 rounded-3xl'
                        onClick={deleteCategory}>

                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteCategory;