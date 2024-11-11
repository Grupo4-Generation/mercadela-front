import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { useContext } from "react";
import EditProduct from "./crud/EditProduct";
import DeleteProduct from "./crud/DeleteProduct";
import Product from "../../models/Product";
import { AuthContext } from "../../contexts/AuthContext";

interface ProductCardProps {
  product: Product;
}

function DinamicCard({ product }: ProductCardProps) {
  let formatedPrice = (product.price / 1).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const { user } = useContext(AuthContext);

  function isProductOwner(product: Product) {
    if (user.admin) {
      return true;
    }
    if (user.id === product.user?.id) {
      return true;
    }
    return false;
  }

  return (
    <div className="bg-backgroundCard p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex justify-center">
        <img
          className="w-48 h-48 object-cover rounded-lg bg-gray-100"
          src={product.photo}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col justify-between text-center">
        <div className="my-3">
          <p className="font-bold text-xl text-primary truncate">
            {product.name}
          </p>
        </div>

        <div className="my-2">
          <p className="text-lg text-textHighlight">{formatedPrice}</p>
        </div>

        <div>
          <Link to={`/product/${product.id}`}>
            <p className="rounded cursor-pointer bg-secondary hover:bg-hoverSecondary px-4 py-2 text-lg font-semibold transition-transform hover:scale-105 text-white">
              Comprar
            </p>
          </Link>
        </div>

        <div className="flex justify-center my-2">
          {user.admin === true || isProductOwner(product) ? (
            <>
              <Popup
                trigger={
                  <button className="mr-2 rounded bg-yellow-400 px-4 py-2 text-lg text-white hover:bg-yellow-600 transition duration-150">
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
                  <button className="rounded bg-red-600 px-4 py-2 text-lg text-white hover:bg-red-700 transition duration-150">
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
