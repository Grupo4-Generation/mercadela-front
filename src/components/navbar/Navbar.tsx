import { MagnifyingGlass } from "@phosphor-icons/react";
import { ArrowCircleDown, ShoppingCart, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <>
            <div className="w-full h-[12vh] px-6 py-1 bg-[#FDD3BE] flex justify-center">
                <div className="w-full flex justify-between text-lg">

                    <div className="self-center">
                        <Link to="/home">
                            <img src="src\assets\logo-navbar.png" alt="LogoNav" className="min-w-[12vw] w-[12vw] my-1" />
                        </Link>
                    </div>

                    <div className="self-center bg-[#FDBE9F] px-2 py-1 rounded-full">
                        <form className="flex items-center flex-row">
                            <input id="BarraPesquisa" className="rounded-xl w-[30vw] me-2 flex items-center" placeholder="Digite aqui"></input>

                            <button className="bg-[#DB5413] rounded-full text-[#FDD3BE] p-1.5">
                                <MagnifyingGlass size={20} weight="bold" />
                            </button>
                        </form>
                    </div>

                    <div className="flex gap-4 text-[#DB5413] self-center font-fontProjeto font-bold">
                        <div className="flex self-center items-center text-xl">
                            <Link to="/categoria">Categorias</Link>
                            <ArrowCircleDown size={18} weight="bold" />
                        </div>

                        <div className="flex self-center">
                            <ShoppingCart size={32} />
                        </div>

                        <div className="flex justify-items-center flex-col">
                            <Link to="/login">
                                <UserCircle className="ml-2" size={32} />
                                <p>Entrar</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar