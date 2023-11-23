import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";

import Categoria from "../../../models/Categoria";
import { RotatingLines } from "react-loader-spinner";

interface DeleteProps {
    id: number
}

function DeletarCategoria({id} : DeleteProps) {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId() {
        try {
            await buscar(`/categoria/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId()
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categoria/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Categoria apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar Categoria')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categoria")
    }

    return (
        <div className='font-fontProjeto p-4 container w-[60vw] mx-auto bg-[#FEEAE0] rounded-3xl'>
            <h1 className='font-bold text-4xl text-center my-4 text-[red]'>Deletar Categoria</h1>

            <p className='text-center font-semibold mb-4 text-[red]'>
                Você tem certeza de que deseja <br></br>apagar a categoria a seguir?
            </p>

            <div className='text-center flex flex-col overflow-hidden justify-between'>
                <p className='p-8 text-3xl h-full text-[#DB5413] font-bold'>{categoria.nomeCategoria}</p>

                <div className="flex space-x-[10vw] self-center">

                    <button
                        className='font-bold text-slate-100 bg-[#13DBB7] hover:bg-[#0F9D84] 
                            flex items-center justify-center px-5 rounded-3xl'
                        onClick={deletarCategoria}>

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

export default DeletarCategoria