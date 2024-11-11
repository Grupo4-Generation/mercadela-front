import React from "react";
import { useNavigate } from "react-router-dom";
import Product from "../../models/Product";

interface HomeCardProps {
  product: Product;
}

const HomeCard: React.FC<HomeCardProps> = ({ product }) => {
    const navigate = useNavigate();

  return (
    <div
      className="bg-backgroundCard p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
      style={{
        backgroundColor: "#FDBE9F",
      }}
    >
      <img
        src={product.photo}
        alt={`Imagem de ${product.name}`}
        className="w-full h-48 object-cover rounded-md mb-4 hover:opacity-90 transition-opacity"
      />
      <h2
        className="text-xl font-bold text-primary mb-2"
        style={{
          color: "#DB5413",
        }}
      >
        {product.name}
      </h2>
      <p
        className="text-lg text-textHighlight mb-4"
        style={{
          color: "#983854",
        }}
      >
        R$ {product.price.toFixed(2)}
      </p>
      <button
        onClick={() => navigate("/products")}
        className="w-full py-2 rounded bg-primary text-white font-semibold hover:bg-hoverPrimary transition-colors duration-200"
        style={{
          backgroundColor: "#DB5413",
        }}
      >
        Ver Produtos
      </button>
    </div>
  );
};

export default HomeCard;
