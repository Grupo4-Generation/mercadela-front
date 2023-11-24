import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../../../contexts/AuthContext";
import { buscar, deletar } from "../../../../services/Service";
import Produto from "../../../../models/Produto";
import { toastAlerta } from "../../../../util/toastAlerta";

function Deletarproduto() {
  const [produto, setproduto] = useState<Produto>({} as Produto);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produto/${id}`, setproduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "erro");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/produtos");
  }

  async function deletarProduto() {
    try {
      await deletar(`/produto/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("produto apagada com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar a produto", "erro");
    }

    retornar();
  }

  return (
    <div className="font-fontProjeto p-4 container mx-auto bg-[#FEEAE0] rounded-3xl">
      <h1 className="text-4xl text-center my-4 text-[red] font-bold">
        Deletar produto
      </h1>

      <p className="text-center font-bold mb-4 text-[red]">
        Você tem certeza de que deseja <br></br>apagar a produto a seguir?
      </p>

      <div className="flex flex-col rounded-2xl overflow-hidden text-center">
        <div className="p-4">
          <p className="p-8 text-3xl h-full text-[#DB5413] font-bold">
            {produto.nomeProduto}
          </p>
        </div>

        <div className="flex justify-center space-x-[1vw] font-bold font-fontProjeto">
          <button
            className="text-slate-100 bg-[red] hover:bg-[#B60E0E] 
                            flex items-center justify-center px-5 rounded-3xl py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="text-slate-100 bg-[#13DBB7] hover:bg-[#0F9D84]  
                            flex items-center justify-center px-5 rounded-3xl"
            onClick={deletarProduto}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deletarproduto;
