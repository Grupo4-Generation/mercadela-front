import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";
import EditProduct from "./crud/EditProduct";
import DeleteProduct from "./crud/DeleteProduct";
import Product from "../../../models/Product";

interface ProductCardProps {
  product: Product;
}

function DinamicCard({ product }: ProductCardProps) {
  let precoFormatado = (product.price / 1).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const { user } = useContext(AuthContext);

  return (
    <div className="rounded-lg p-3 shadow-md transition duration-150 hover:shadow-xl bg-white">
      <div className="flex justify-center">
        <img
          className="w-48 h-48 object-cover rounded-lg bg-gray-100"
          src={product.photo}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col justify-between text-center">
        <div className="my-3">
          <p className="font-bold text-xl text-[#DB5413] truncate">
            {product.name}
          </p>
        </div>

        <div className="my-2">
          <p className="text-xl font-semibold text-[#13DBB7]">
            {precoFormatado}
          </p>
        </div>

        <div className="my-2">
          <Link to={`/product/${product.id}`}>
            <p className="rounded-full cursor-pointer bg-[#13DBB7] hover:bg-[#0F9D84] px-4 py-2 text-lg font-semibold transition-transform hover:scale-105 text-white">
              Comprar
            </p>
          </Link>
        </div>

        <div className="flex justify-center my-2">
          {user.admin === true ||
          user.gender === "Outros" ||
          user.gender === "Feminino" ? (
            <>
              <Popup
                trigger={
                  <button className="mr-2 rounded-full bg-yellow-400 px-4 py-2 text-lg text-white hover:bg-yellow-600 transition duration-150">
                    Editar
                  </button>
                }
                modal
              >
                <EditProduct
                  id={product.id}
                  photo={product.photo}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  user={product.user}
                  description={product.description}
                />
              </Popup>

              <Popup
                trigger={
                  <button className="rounded-full bg-red-600 px-4 py-2 text-lg text-white hover:bg-red-700 transition duration-150">
                    Deletar
                  </button>
                }
                modal
              >
                <DeleteProduct
                  id={product.id}
                  fotoproduct={product.photo}
                  nomeproduct={product.name}
                  idCategoria={product.category}
                  precoproduct={product.price}
                  user={product.user}
                  descricaoproduct={product.description}
                />
              </Popup>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default DinamicCard;
