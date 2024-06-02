import { useState, useContext, useEffect, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserLogin from "../../models/UserLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";

export function Login() {

  const navigate = useNavigate();
  const { user, handleLogin, isLoading } = useContext(AuthContext);

  const [userLogin, setuserLogin] = useState<UserLogin>(
    {} as UserLogin
  );

  useEffect(() => {
    if (user.token !== "") {
      navigate('/home')
    }
  }, [user])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setuserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }
  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(userLogin)
  }

  return (
    <div className="flex-grow bg-[#FEEAE0] font-fontProjeto max-w-sm align-middle rounded-3xl px-10 py-8">
      <form className="font-fontProjeto max-w-[400px] w-full mx-auto" onSubmit={login}>

        <div className="flex justify-center p-6">
          <img src="https://iili.io/JX1Xt0g.png" alt="Ícone" className="max-h-20" />
        </div>


        <div className="flex flex-col pb-6">
          <label htmlFor="email" className="text-xl text-[#DB5413] font-bold pb-2 pl-5">
            E-mail
          </label>

          <input
            type="text"
            id="email"
            name="email"
            className="p-1 border border-gray-300 rounded-2xl px-3 focus:outline-none"
            placeholder="Email@exemplo.com"
            value={userLogin.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col pb-6">
          <label htmlFor="password" className="text-xl text-[#DB5413] font-bold pb-2 pl-5">
            Senha
          </label>

          <input
            type="password"
            id="password"
            name="password"
            className="p-1 border border-gray-300 rounded-2xl px-3 focus:outline-none"
            placeholder="Digite a senha"
            value={userLogin.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="text-3xl text-white pb-1 font-bold rounded-3xl pt-[5px] px-4 bg-[#13DBB7] hover:bg-[#0F9D84]">
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

        <div className="flex justify-center pt-5">
          <p className="text-xl text-[#DB5413] font-bold">
            Ou <Link to='/register' className="text-[#983854] hover:text-[#DB5413]">cadastre-se aqui</Link>
          </p>
        </div>

      </form>
    </div>
  );
}


export default Login;
