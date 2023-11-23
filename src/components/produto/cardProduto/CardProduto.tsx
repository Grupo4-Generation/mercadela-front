import React from "react";

interface ProductCardProps {
  nomeProduto: string;
  precoProduto: number;
  fotoProduto: string;
}

const CardProduto: React.FC<ProductCardProps> = ({ nomeProduto, precoProduto, fotoProduto }) => {
  let precoFormatado = (precoProduto / 1).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

  return (
    <div className="max-w-xs rounded-lg p-3 shadow duration-150 hover:shadow-md">
      <img className="w-full rounded-lg object-cover object-center bg-gray-100" src={fotoProduto} alt="product" />
      <div>
        <div className="my-3 flex items-center justify-center">
          <p className="font-bold text-2xl text-orange-500">{nomeProduto}</p>
        </div>
        <div className="my-2 flex justify-center">
          <p className="text-3xl font-semibold text-[#13DBB7]">{precoFormatado}</p>
        </div>
        <div className="my-2 flex justify-center">
          <button className="rounded-full bg-[#13DBB7] hover:bg-[#0F9D84] px-4 hover:scale-105 duration-100">
            <p className="text-white text-3xl font-semibold pt-[3px]">Comprar</p>
          </button>

        </div>
      </div>
    </div>
  );
}

export default CardProduto;
