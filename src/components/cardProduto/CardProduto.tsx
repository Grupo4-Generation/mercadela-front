import React from 'react';

interface ProductCardProps {
  nomeProduto: string;
  precoProduto: string;
  fotoProduto: string;
}

const CardProduto: React.FC<ProductCardProps> = ({ nomeProduto, precoProduto, fotoProduto }) => {
  return (
    <div className="max-w-xs rounded-lg p-3 shadow duration-150 hover:shadow-md">
      <img className="w-full rounded-lg object-cover object-center bg-gray-100" src={fotoProduto} alt="product" />
      <div>
        <div className="my-3 flex items-center justify-center">
          <p className="font-bold text-2xl text-orange-500">{nomeProduto}</p>
        </div>
        <div className="my-2 flex justify-center">
          <p className="text-xl font-semibold text-green-500">{precoProduto}</p>
        </div>
        <div className="my-2 flex justify-center">
          <p className="rounded-full cursor-pointer bg-green-500 px-2 text-4xl font-semibold hover:scale-105 text-white">Comprar</p>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;