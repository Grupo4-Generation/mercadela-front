import { useState, useContext, useEffect, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

export function Login() {

  let navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );
  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin(({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    }));
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="flex-grow bg-[#FEEAE0] font-fontProjeto max-w-sm align-middle rounded-3xl p-10 ">
      <form onSubmit={login} className="font-fontProjeto max-w-[400px] w-full mx-auto">

        <div className="flex justify-center p-6">
          <img src="src\assets\logo-navbar.png" alt="Ícone" className="max-h-20" />
          {/* <h1 className="font-fontProjeto text-[#DB5413] font-bold text-2xl">
            MercaDela
          </h1> */}
        </div>


        <div className="flex flex-col pb-6">
          <label className="text-xl text-[#DB5413] font-bold pb-2 pl-5">
            E-mail
          </label>

          <input
            className="p-1 border border-gray-300 rounded-2xl px-3"
            placeholder="Email@exemplo.com"
            type="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </div>

        <div className="flex flex-col pb-6">
          <label className="text-xl text-[#DB5413] font-bold pb-2 pl-5">
            Senha
          </label>

          <input
            className="p-1 border border-gray-300 rounded-2xl px-3"
            placeholder="Digite a senha"
            type="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex justify-center pb-2">
          <p className="text-xl text-[#DB5413] font-bold">
            Ou cadastre-se <Link to='/cadastro' className="text-[#983854] hover:text-[#DB5413]">
              aqui
            </Link>
            !
          </p>
        </div>

        <div className="flex justify-center">
          <button className="text-3xl text-white font-bold rounded-3xl pt-[5px] px-4 bg-[#13DBB7] hover:bg-[#0F9D84]"
            type="submit">
            {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
              <span>Entrar</span>}
          </button>
        </div>
      </form>
    </div>
  );
}
