import { Link } from "react-router-dom";
import Produto from "../../../models/Product";
import EditarProduto from "../../../pages/product/crud/EditProduct";
import Popup from "reactjs-popup";
import Deletarproduto from "../../../pages/product/crud/DeleteProduct";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";

interface ProductCardProps {
  produto: Produto;
}

function CardProdutos({ produto }: ProductCardProps) {
  let precoFormatado = (produto.precoProduto / 1).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const { usuario } = useContext(AuthContext);

  return (
    <>
      <div className="rounded-lg p-3 shadow duration-150 hover:shadow-2xl">
        <div className=" flex w-full">
          <img
            className="w-full h-full sm:h-auto rounded-lg object-cover object-center bg-gray-100"
            src={produto.fotoProduto}
            alt="produto"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="my-3 flex justify-center">
            <p className="font-bold truncate text-2xl text-orange-500">
              {produto.nomeProduto}
            </p>
          </div>

          <div className="my-2 flex justify-center">
            <p className="text-2xl font-semibold text-[#13DBB7]">
              {precoFormatado}
            </p>
          </div>

          <div className="my-2 flex justify-center">
            <Link to={`/produto/${produto.id}`}>
              <p className="rounded-full cursor-pointer bg-[#13DBB7] hover:bg-[#0F9D84] px-4 pt-1 text-3xl font-semibold hover:scale-105 text-white">
                Comprar
              </p>
            </Link>
          </div>
          <div className="my-2 flex justify-center">
            <div className="mr-1">
              {usuario.generoUsuario === "Feminino" ||
              usuario.generoUsuario === "Outros" ||
              usuario.generoUsuario === "Admin" ? (
                <Popup
                  trigger={
                    <button className="col-start-3 justify-self-end border rounded-[35px] px-4 py-2 text-2xl text-white bg-yellow-400 hover:bg-yellow-600">
                      Editar
                    </button>
                  }
                  modal
                >
                  <EditarProduto id={produto.id} fotoProduto={produto.fotoProduto} nomeProduto={produto.nomeProduto} idCategoria={produto.idCategoria
                  } precoProduto={produto.precoProduto} usuario={produto.usuario} descricaoProduto={produto.descricaoProduto}  />
                </Popup>
              ) : null}
            </div>
            <div className="ml-1">
              {usuario.generoUsuario === "Feminino" ||
              usuario.generoUsuario === "Outros" ||
              usuario.generoUsuario === "Admin" ? (
                <Popup
                  trigger={
                    <button className="flex rounded-full justify-center text-center cursor-pointer bg-[#fe322e] px-2 py-2 text-2xl font-semibold hover:scale-105 hover:bg-[#B60E0E] text-white">
                      Deletar
                    </button>
                  }
                  modal
                >
                  <Deletarproduto id={produto.id} fotoProduto={produto.fotoProduto} nomeProduto={produto.nomeProduto} idCategoria={produto.idCategoria
                  } precoProduto={produto.precoProduto} usuario={produto.usuario} descricaoProduto={produto.descricaoProduto}  />
                </Popup>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProdutos;
