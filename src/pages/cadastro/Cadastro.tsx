export default function Cadastro() {
    return (
        <><section className="flex justify-center m-0 pr-5 pl-5">
            <div className="bg-[#FEEAE0] flex flex-col justify-center items-center m-10 rounded-3xl mt-10 mb-10 p-20">
                <h1 className="font-sans text-3xl text-[#DB5413] font-bold pb-7 text-center">
                    Cadastre-se
                </h1>
                <form className="flex flex-row justify-between max-w-[400px] w-full mx-auto">
                    <div className="flex flex-col pr-3">
                        <div className="flex flex-col">
                            <label className="font-sans text-xl text-[#DB5413] font-bold pb-2 pl-5">
                                Nome
                            </label>
                            <input
                                className="p-1 border border-gray-300 rounded-3xl pl-5 italic"
                                placeholder="Digite seu nome"
                                type="nome"
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
                            />
                        </div>

                    </div>
                    <aside className="flex flex-col pl-3">
                        <div className="flex flex-col">
                            <label className="font-sans text-xl text-[#DB5413] font-bold pb-2 pl-5">
                                Gênero
                            </label>
                            <input
                                className="p-1 border border-gray-300 rounded-3xl pl-5 italic"
                                placeholder="Digite seu gênero"
                                type="text"
                            />
                        </div>
                        <div className="flex justify-center">
                            <p className="font-sans text-xl text-[#DB5413] font-bold pt-5">
                                Ou entre com seu login <a
                                    className="font-sans text-xl text-[#983854] font-bold"
                                    href="#"
                                >
                                    aqui
                                </a>
                            </p>

                        </div>
                        <div className="flex justify-center pt-5">
                            <button
                                className="text-3xl font-sans text-white font-bold rounded-3xl pt-1 pb-1 pl-4 pr-4 bg-[#13DBB7]"
                                type="submit"
                            >
                                Entrar
                            </button>
                        </div>
                    </aside>
                </form>
            </div>
            </section></>
    );
}
