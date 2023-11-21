import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
    nomeProduto: string;
    precoProduto: string;
    fotoProduto: string;
}

const CardHome: React.FC<ProductCardProps> = ({ nomeProduto, precoProduto, fotoProduto }) => {
    return (
        <Link to="/produto">
            <div className="font-fontProjeto max-w-xs rounded-lg p-3 shadow duration-150 hover:shadow-md">
                <img className="w-full rounded-lg object-cover object-center bg-gray-100" src={fotoProduto} alt="product" />
                <div>
                    <div className="my-3 flex items-center justify-center">
                        <p className="font-bold text-3xl text-[#DB5413]">{nomeProduto}</p>
                    </div>
                    <div className="my-2 flex justify-center">
                        <p className="text-2xl font-bold text-[#13DBB7]">{precoProduto}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardHome;