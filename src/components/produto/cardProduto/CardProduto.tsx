import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";

interface ProductCardProps {
  produto: Produto;
}

function CardProduto({ produto }: ProductCardProps) {

  let precoFormatado = (produto.precoProduto / 1).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (<>
    <div className="max-w-xs rounded-lg p-3 shadow duration-150 hover:shadow-2xl">
      <img className="w-full rounded-lg object-cover object-center bg-gray-100" src={produto.fotoProduto} alt="produto" />
      <div>
        <div className="my-3 flex items-center justify-center">
          <p className="font-bold text-2xl text-orange-500">{produto.nomeProduto}</p>
        </div>
        <div className="my-2 flex justify-center">
          <p className="text-xl font-semibold text-green-500">{precoFormatado}</p>
        </div>
        <div className="my-2 flex justify-center">
          <Link to={`/produto/${produto.id}`}>
            <p className="rounded-full cursor-pointer bg-green-500 px-2 text-4xl font-semibold hover:scale-105 text-white">Comprar</p>
          </Link></div>
      </div>
    </div>
  </>);
}

export default CardProduto;