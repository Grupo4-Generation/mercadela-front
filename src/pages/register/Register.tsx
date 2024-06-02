import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import user from '../../models/User'

import './Register.css'
import { toastAlerta } from '../../util/toastAlerta'
import { CreateWithoutToken } from '../../services/Service'

function Register() {

    const navigate = useNavigate()

    const [, setIsLoading] = useState<boolean>(false)
    const [enterPassword, setEnterPassword] = useState<string>("")

    const [user, setuser] = useState<user>({
        id: 0,
        cpf: "",
        email: "",
        name: "",
        password: "",
        photo: "",
        gender: "",
    })

    useEffect(() => {
        if (user.id !== 0) {
            exit()
        }
    }, [user])

    function exit() {
        navigate('/login')
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setEnterPassword(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    function atualizarEstadoGenero(e: ChangeEvent<HTMLSelectElement>) {
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovouser(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (enterPassword === user.password && user.password.length >= 8) {
            setIsLoading(true)

            try {
                await CreateWithoutToken(`/users/cadastrar`, user, setuser)
                toastAlerta('Usuário cadastrado com sucesso', 'sucesso')

            } catch (error) {
                toastAlerta('Erro ao cadastrar o Usuário', 'erro')
            }

        } else {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
            setuser({ ...user, password: "" })
            setEnterPassword("")
        }

        setIsLoading(false)
    }

    return (
        <>
            <section className="flex justify-center px-5">
                <div className="w-full font-fontProjeto bg-[#FEEAE0] flex flex-col justify-center items-center rounded-3xl m-0 px-8 py-8">
                    <h1 className="text-3xl text-[#DB5413] font-bold pb-7 text-center">
                        Cadastre-se
                    </h1>
                    <form
                        className="flex flex-col"
                        onSubmit={cadastrarNovouser}>
                        <div className="flex flex-row space-x-8">
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-col">
                                    <label htmlFor="nomeuser" className="text-xl text-[#DB5413] font-bold">
                                        Nome completo</label>
                                    <input
                                        type="text"
                                        id="nomeuser"
                                        name="nomeuser"
                                        placeholder="Digite seu nome"
                                        className="p-1 w-[25vw] border border-gray-300 rounded-3xl pl-5 italic focus:outline-none"
                                        value={user.name}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="emailuser" className="text-xl text-[#DB5413] font-bold">
                                        E-mail</label>
                                    <input
                                        type="email"
                                        id="emailuser"
                                        name="emailuser"
                                        placeholder="email@exemplo.com"
                                        className="p-1 w-[25vw] border border-gray-300 rounded-3xl pl-5 italic focus:outline-none"
                                        value={user.email}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="generouser" className="text-xl text-[#DB5413] font-bold">
                                        Gênero</label>
                                    <select
                                        id="generouser"
                                        name="generouser"
                                        className="h-8 p-1 w-[25vw] border border-gray-300 rounded-3xl pl-5 italic focus:outline-none"
                                        value={user.gender}
                                        onChange={(e: ChangeEvent<HTMLSelectElement>) => atualizarEstadoGenero(e)}
                                    >
                                        <option selected disabled value="">Selecione</option>
                                        <option>Feminino</option>
                                        <option>Masculino</option>
                                        <option>Outro</option>
                                        <option>Não quero declarar</option>

                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-col">
                                    <label htmlFor="senhauser" className="text-xl text-[#DB5413] font-bold">
                                        Senha</label>
                                    <input
                                        type="password"
                                        id="senhauser"
                                        name="senhauser"
                                        placeholder="Digite a senha"
                                        className="p-1 w-[25vw] border border-gray-300 rounded-3xl pl-5 italic focus:outline-none"
                                        value={user.password}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="confirmarSenha" className="text-xl text-[#DB5413] font-bold">
                                        Confirmar senha</label>
                                    <input
                                        type="password"
                                        id="confirmarSenha"
                                        name="confirmarSenha"
                                        placeholder="Confirmar a senha"
                                        className="p-1 w-[25vw] border border-gray-300 rounded-3xl pl-5 italic focus:outline-none"
                                        value={enterPassword}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="foto" className="text-xl text-[#DB5413] font-bold">
                                        Foto</label>
                                    <input
                                        type="text"
                                        id="foto"
                                        name="foto"
                                        placeholder="Insira a URL da foto"
                                        className="p-1 w-[25vw] border border-gray-300 rounded-3xl pl-5 italic focus:outline-none"
                                        value={user.photo}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-10 space-y-4'>
                            <div className="flex justify-center">
                                <button
                                    className="flex text-3xl text-white font-bold rounded-3xl pt-1 px-3 bg-[#13DBB7] hover:bg-[#0F9D84]"
                                    type="submit"
                                >Cadastrar</button>
                            </div>
                            <div className="flex justify-center">
                                <p className="text-xl text-[#DB5413] font-bold">
                                    Ou <Link to="/login" className="text-xl font-bold text-[#983854] hover:text-[#DB5413]">entre com seu login</Link>

                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </section></>
    );
}

export default Register
