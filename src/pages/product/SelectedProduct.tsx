import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import "../../models/Product";
import "reactjs-popup/dist/index.css";
import { toastAlerta } from "../../util/toastAlerta";
import { FindWithoutToken } from "../../services/Service";
import Product from "../../models/Product";

function SelectedProduct() {
  const { id } = useParams<{ id: string }>();

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;
  const navigate = useNavigate();
  const [quantidade, setQuantidade] = useState<number>(1);
  const [product, setproduct] = useState<Product>({} as Product);
  async function findById(id: string) {
    try {
      await FindWithoutToken(`/product/${id}`, setproduct);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  // useEffect(() => {
  //   if (token === "") {
  //     toastAlerta("Você precisa estar logado", "erro");
  //     navigate("/login");
  //   }
  // }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  let handleClick = () => {
    toastAlerta("Compra efetuada com sucesso!", "sucesso");
  };
  let adicionar = () => {
    setQuantidade(quantidade + 1);
  };
  let subtrair = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    } else {
      toastAlerta("Quantidade mínima atingida!", "erro");
    }
  };
  let precoFormatado = (product.price / 1).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <div className="flex m-0 items-center justify-center font-fontProjeto">
        <img
          className="shadow-2xl max-w-sm rounded-lg object-cover object-center bg-white-500"
          src={product.photo}
          alt="product"
        />
        <div className="flex flex-col flex-wrap pl-5">
          <div className="my-5 flex ml-4 align-top">
            <p className="align-top font-bold text-5xl text-justify text-[#d95613]">
              {product?.name}
            </p>
          </div>
          <div className="ml-4 mr-6">
            <p className="text-justify max-w-md">{product.description}</p>
          </div>
          <div className="my-5 flex ml-4">
            <p className="font-bold text-5xl text-justify text-[#13dbb7]">
              {precoFormatado}
            </p>
          </div>
          <div className="flex space-x-20 pl-4">
            <div className="flex items-center py-4 px-5 box-border border-[#bd5c46] border-4 rounded-full text-2xl font-semibold hover:scale-10 w-35">
              <button onClick={subtrair} className="px-2 text-[#bd5c46]">
                -
              </button>
              <span className="px-2">{quantidade}</span>
              <button onClick={adicionar} className="px-2 text-[#13dbb7] ">
                +
              </button>
            </div>
            <div className="my-2 flex ml-4">
              <button
                onClick={handleClick}
                className="rounded-full cursor-pointer bg-[#13dbb7] px-4 text-2xl font-semibold hover:scale-105 text-white"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedProduct;