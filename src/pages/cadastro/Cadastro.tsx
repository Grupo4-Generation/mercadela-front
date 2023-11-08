import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { cadastrarUsuario } from '../../service/Service'
import Usuario from '../../models/Usuario'

import './Cadastro.css'

export default function Cadastro() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nomeUsuario: '',
        emailUsuario: '',
        senhaUsuario: '',
        generoUsuario: '',
        foto: ''
    })

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar()
        }
    }, [usuario])

    function retornar() {
        navigate('/login')
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (usuario.senhaUsuario.length >= 8) {
            setIsLoading(true)

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
                alert('Usuário cadastrado com sucesso')

            } catch (error) {
                alert('Erro ao cadastrar o Usuário')
            }

        } else {
            alert('Dados inconsistentes. Verifique as informações de cadastro.')
            setUsuario({ ...usuario, senhaUsuario: "" })
            setConfirmaSenha("")
        }

        setIsLoading(false)
    }

    return (
        <><section className="flex justify-center m-0 pr-5 pl-5">
            <div className="bg-[#FEEAE0] flex flex-col justify-center items-center m-10 rounded-3xl mt-10 mb-10 p-20">
                <h1 className="font-sans text-3xl text-[#DB5413] font-bold pb-7 text-center">
                    Cadastre-se
                </h1>
                <form className="flex flex-row justify-between max-w-[400px] w-full mx-auto" onSubmit={cadastrarNovoUsuario}>
                    <div className="flex flex-col pr-3">
                        <div className="flex flex-col">
                            <label htmlFor="nomeUsuario" className="font-sans text-xl text-[#DB5413] font-bold pb-2 pl-5">
                                Nome
                            </label>
                            <input
                                className="p-1 border border-gray-300 rounded-3xl pl-5 italic"
                                placeholder="Digite seu nome"
                                type="text"
                                id="nomeUsuario"
                                name="nomeUsuario"
                                value={usuario.nomeUsuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-sans text-xl text-[#DB5413] font-bold pb-2 pl-5">
                                E-mail
                            </label>
                            <input
                                className="p-1 border border-gray-300 rounded-3xl pl-5 italic"
                                placeholder="Digite o e-mail"
                                type="email"
                                id="emailUsuario"
                                name="emailUsuario"
                                value={usuario.emailUsuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-sans text-xl text-[#DB5413] font-bold pb-2 pl-5 pt-5">
                                Senha
                            </label>
                            <input
                                className="p-1 border border-gray-300 rounded-3xl pl-5 italic"
                                placeholder="Digite a senha"
                                type="password"
                                id="senhaUsuario"
                                name="senhaUsuario"
                                value={usuario.senhaUsuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col pl-3">
                        <div className="flex flex-col">
                            <label className="font-sans text-xl text-[#DB5413] font-bold pb-2 pl-5">
                                Gênero
                            </label>
                            <input
                                className="p-1 border border-gray-300 rounded-3xl pl-5 italic"
                                placeholder="Digite seu gênero"
                                type="text"
                                id="generoUsuario"
                                name="generoUsuario"
                                value={usuario.generoUsuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>

                        <div className="flex justify-center">
                            <p className="font-sans text-xl text-[#DB5413] font-bold pt-5">
                                Ou entre com seu login <a className="font-sans text-xl text-[#983854] font-bold" href="/login">Aqui</a>
                            </p>
                        </div>

                        <div className="flex justify-center pt-5">
                            <button
                                className="flex items-center justify-center text-3xl text-white font-bold rounded-3xl py-1 px-3 bg-[#13DBB7]"
                                type="submit"
                                >Cadastrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section></>
    );
}
