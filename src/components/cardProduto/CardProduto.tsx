import React from "react";

interface ProductCardProps {
  nomeProduto: string;
  precoProduto: string;
  fotoProduto: string;
}

const CardProduto: React.FC<ProductCardProps> = ({ nomeProduto, precoProduto, fotoProduto }) => {
  return (
    <div className="font-fontProjeto max-w-xs rounded-lg p-3 shadow duration-150 hover:shadow-md">
      <img className="w-full rounded-lg object-cover object-center bg-gray-100" src={fotoProduto} alt="product" />
      <div>
        <div className="my-3 flex items-center justify-center">
          <p className="font-bold text-2xl text-[#DB5413]">{nomeProduto}</p>
        </div>
        <div className="my-2 flex justify-center">
          <p className="text-2xl font-bold text-[#13DBB7]">{precoProduto}</p>
        </div>
        <div className="my-2 flex justify-center">
          <button className="w-auto rounded-full cursor-pointer bg-[#13DBB7] px-3 text-2xl font-bold hover:bg-[#0F9D84] text-white">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;