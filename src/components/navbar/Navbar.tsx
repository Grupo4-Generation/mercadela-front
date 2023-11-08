import { MagnifyingGlass } from "@phosphor-icons/react";
import { ArrowCircleDown, ShoppingCart, UserCircle } from "@phosphor-icons/react/dist/ssr";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <div className='w-full bg-[#FDD3BE] flex justify-center py-4'>

                <div className="container flex justify-between text-lg font-[league spartan]">
                    <div className="self-center">
                        <a href='#'>
                            <img src="src\assets\logo-navbar.png" alt="LogoNav" className='w-40' />
                        </a>
                    </div>

                    <div className="self-center bg-[#FDBE9F] px-2 py-1 rounded-full">
                        <form className="flex items-center flex-row">
                            <input id="BarraPesquisa" className="rounded-xl w-[30vw] me-2 flex items-center" placeholder="Digite aqui"></input>

                            <button className="bg-[#DB5413] rounded-full text-[#FDD3BE] p-1.5">
                                <MagnifyingGlass size={20} weight='bold' />
                            </button>
                        </form>
                    </div>

                    <div className="flex gap-4 text-[#DB5413] self-center font-fontProjeto font-bold">
                        <div className="flex self-center items-center">
                            <p>Categorias</p>
                            <ArrowCircleDown size={18} />
                        </div>

                        <div className="flex self-center">
                            <ShoppingCart size={32} />
                        </div>

                        <div className="flex self-center flex-col">
                            <UserCircle size={32} className="self-center"/>
                            <p>Entrar</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar