import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { Delete, FindWitchToken } from "../../../../services/Service";
import { toastAlerta } from "../../../../util/toastAlerta";
import { AuthContext } from "../../../../contexts/AuthContext";
import Product from "../../../../models/Product";

function DeleteProduct(selectedProduct: Product | any) {
  const [produto, setProduct] = useState<Product>({} as Product);

  let navigate = useNavigate();

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  async function findById(id: number) {
    try {
      await FindWitchToken(`/product/${id}`, setProduct, {
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
    if (selectedProduct.id !== undefined) {
      findById(selectedProduct.id);
    }
  }, []);

  function back() {
    navigate("/LoadProduto");
  }

  async function DeleteProduct() {
    try {
      await Delete (`/product/${selectedProduct.id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("produto apagado com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar a produto", "erro");
    }

    back();
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
            {produto.name}
          </p>
        </div>

        <div className="flex justify-center space-x-[1vw] font-bold font-fontProjeto">
          <button
            className="text-slate-100 bg-[red] hover:bg-[#B60E0E] 
                            flex items-center justify-center px-5 rounded-3xl py-2"
            onClick={back}
          >
            Não
          </button>
          <button
            className="text-slate-100 bg-[#13DBB7] hover:bg-[#0F9D84]  
                            flex items-center justify-center px-5 rounded-3xl"
            onClick={DeleteProduct}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
