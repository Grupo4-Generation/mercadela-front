import { MagnifyingGlass } from "@phosphor-icons/react";
import { ShoppingCart, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { toastAlerta } from "../../util/toastAlerta";

function Navbar() {
  const { usuario, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[12vh] px-6 py-1 bg-[#FDD3BE] flex justify-center">
        <div className="w-full flex justify-between text-lg">
          <div className="self-center">
            <Link to="/home">
              <img
                src="https://iili.io/JX1Xt0g.png"
                alt="LogoNav"
                className="min-w-[12vw] w-[12vw] my-1 hover:scale-105 duration-100"
              />
            </Link>
          </div>

          <div className="self-center bg-[#FDBE9F] px-2 py-1 rounded-full font-fontProjeto">
            <form className="flex items-center flex-row">
              <input
                id="BarraPesquisa"
                className="rounded-xl pl-3 w-[25vw] me-2 focus:outline-none"
                placeholder="Digite aqui"
              ></input>

              <Link to="/">
                <button className="bg-[#DB5413] hover:bg-[#bc4710] rounded-full text-[#FDD3BE] p-1.5">
                  <MagnifyingGlass size={25} weight="bold" />
                </button>
              </Link>
            </form>
          </div>

          <div className="flex gap-4 text-[#DB5413] self-center font-fontProjeto font-bold">
            <div className="flex self-center items-center gap-8 text-xl">
              <Link to="/produtos" className="hover:text-[#bc4710] text-3xl">
                Produtos
              </Link>
              <Link to="/categoria" className="hover:text-[#bc4710] text-3xl">
                Categorias
              </Link>

              <ShoppingCart
                className="hover:text-[#bc4710] cursor-pointer"
                size={40}
              />
              <div>
                {usuario && usuario.token === "" ? (
                  <Link to="/login">
                    <div className="hover:text-[#bc4710] grid justify-items-stretch cursor-pointer">
                      <UserCircle size={40} className="justify-self-center" />
                      <p>Entrar</p>
                    </div>
                  </Link>
                ) : (
                  <div className="grid justify-items-stretch hover:text-[#bc4710] cursor-pointer" onClick={() => {
                    toastAlerta("Usuário deslogado com sucesso", "sucesso");
                        handleLogout();
                        navigate("/");
                  }}>
                    <UserCircle size={40} className="justify-self-center"/>
                    <p className="justify-self-center">Sair</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
