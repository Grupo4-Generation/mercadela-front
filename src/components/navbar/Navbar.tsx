import { MagnifyingGlass } from "@phosphor-icons/react";
import { ShoppingCart, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Navbar() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="w-full h-[12vh] px-6 py-1 bg-backgroundHeader flex justify-center">
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

        <div className="self-center bg-backgroundCard px-2 py-1 rounded-full font-fontProjeto">
          <form className="flex items-center flex-row">
            <input
              id="BarraPesquisa"
              className="rounded-xl pl-3 w-[25vw] me-2 focus:outline-none"
              placeholder="Digite aqui"
            />
            <Link to="/">
              <button className="bg-primary hover:bg-hoverPrimary rounded-full text-backgroundCard p-1.5">
                <MagnifyingGlass size={25} weight="bold" />
              </button>
            </Link>
          </form>
        </div>

        <div className="flex gap-4 text-primary self-center font-fontProjeto font-bold">
          <div className="flex self-center items-center gap-8 text-xl">
            <Link to="/products" className="hover:text-hoverPrimary text-3xl">
              Produtos
            </Link>
            <Link to="/category" className="hover:text-hoverPrimary text-3xl">
              Categorias
            </Link>

            <ShoppingCart
              className="hover:text-hoverPrimary cursor-pointer"
              size={40}
            />
            <div>
              {user && user.token === "" ? (
                <Link to="/login">
                  <div className="hover:text-hoverPrimary grid justify-items-stretch cursor-pointer">
                    <UserCircle size={40} className="justify-self-center" />
                    <p>Entrar</p>
                  </div>
                </Link>
              ) : (
                <div
                  className="grid justify-items-stretch hover:text-hoverPrimary cursor-pointer"
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <UserCircle size={40} className="justify-self-center" />
                  <p className="justify-self-center">Perfil</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
