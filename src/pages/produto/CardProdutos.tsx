import { Link } from "react-router-dom";
import Produto from "../../models/Produto";

interface ProductCardProps {
  produto: Produto;
}

function CardProdutos({ produto }: ProductCardProps) {
  let precoFormatado = (produto.precoProduto / 1).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <div className="rounded-lg p-3 shadow duration-150 hover:shadow-2xl">
        <img
          className="w-full h-48 sm:h-auto rounded-lg object-cover object-center bg-gray-100"
          src={produto.fotoProduto}
          alt="produto"
        />
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
        </div>
      </div>
    </>
  );
}

export default CardProdutos;
