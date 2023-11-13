import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="flex-grow bg-[#FEEAE0] font-fontProjeto max-w-sm align-middle rounded-3xl p-10 ">
      <form className="font-fontProjeto max-w-[400px] w-full mx-auto">

        <div className="flex justify-center pb-6">
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
            type="email" />
        </div>

        <div className="flex flex-col pb-6">
          <label className="text-xl text-[#DB5413] font-bold pb-2 pl-5">
            Senha
          </label>

          <input
            className="p-1 border border-gray-300 rounded-2xl px-3"
            placeholder="Digite a senha"
            type="password" />
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
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login