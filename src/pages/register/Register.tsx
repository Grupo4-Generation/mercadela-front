import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toastAlerta } from "../../util/toastAlerta";
import { CreateWithoutToken } from "../../services/Service";
import User from "../../models/User";

function Register() {
  const navigate = useNavigate();
  const [, setIsLoading] = useState<boolean>(false);

  const [user, setUser] = useState<User>({
    id: 0,
    cpf: "",
    email: "",
    name: "",
    password: "",
    photo: "",
    gender: "",
    token: "",
    admin: null,
  });

  useEffect(() => {
    if (user.id !== 0) {
      navigate("/login");
    }
  }, [user, navigate]);

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const cadastrarNovoUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await CreateWithoutToken(`/user/register`, user, setUser);
      toastAlerta("Usuário cadastrado com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao cadastrar o Usuário", "erro");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex justify-center px-5">
      <div className="w-full font-fontProjeto bg-backgroundLight flex flex-col justify-center items-center rounded-3xl px-8 py-8">
        <h1 className="text-3xl text-primary font-bold pb-7 text-center">
          Cadastre-se
        </h1>
        <form className="flex flex-col" onSubmit={cadastrarNovoUser}>
          <div className="flex flex-row space-x-8">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-xl text-primary font-bold"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@exemplo.com"
                  className="p-1 w-[25vw] border border-gray-300 rounded-3xl pl-5 focus:outline-none"
                  value={user.email}
                  onChange={atualizarEstado}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-xl text-primary font-bold"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Digite a senha"
                  className="p-1 w-[25vw] border border-gray-300 rounded-3xl pl-5 focus:outline-none"
                  value={user.password}
                  onChange={atualizarEstado}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 space-y-4">
            <div className="flex justify-center">
              <button
                className="flex text-3xl text-white font-bold rounded-3xl pt-1 px-3 bg-secondary hover:bg-hoverSecondary"
                type="submit"
              >
                Cadastrar
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-xl text-primary font-bold">
                Ou{" "}
                <Link
                  to="/login"
                  className="text-xl font-bold text-textHighlight hover:text-primary"
                >
                  entre com seu login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
