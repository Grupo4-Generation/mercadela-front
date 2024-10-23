import { useState, useEffect, useContext } from "react";

import "reactjs-popup/dist/index.css";
import { toastAlerta } from "../../util/toastAlerta";
import { ProgressBar } from "react-loader-spinner";
import Popup from "reactjs-popup";
import { AuthContext } from "../../contexts/AuthContext";
import Product from "../../models/Product";
import { FindWithoutToken } from "../../services/Service";
import EditProduct from "../../components/product/productCard/crud/EditProduct";
import DinamicCard from "../../components/product/productCard/DinamicCard";

function ProductList() {
  const [Products, setProducts] = useState<Product[]>([]);
  const { user } = useContext(AuthContext);
  async function findProducts() {
    try {
      await FindWithoutToken("/product", setProducts);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("Sessão expirada...", "erro");
      }
    }
  }

  useEffect(() => {
    findProducts();
  }, []);

  return (
    <>
      <div className="font-fontProjeto font-bold container w-[80vw] px-[1vw] grid grid-cols-5 gap-5">
        <div className="col-span-5 grid grid-col-3 gap-4 items-center mt-8 mb-10">
          <div className="col-start-1 justify-self-end rounded-[35px] px-4 py-2 text-2xl text-white bg-[white]"></div>

          <h1 className="col-start-2 justify-self-center px-4 text-6xl text-[#DB5413] font-bold">
            Products
          </h1>
          {user.gender === "Feminino" ||
          user.gender === "Outros" ||
          user.gender === "Admin" ? (
            <Popup
              trigger={
                <button className="col-start-3 justify-self-end border rounded-[35px] px-4 py-2 text-2xl text-white bg-[#13DBB7] hover:bg-[#0F9D84]">
                  + criar
                </button>
              }
              modal
            >
              <EditProduct />
            </Popup>
          ) : (
            <div className="col-start-3 justify-self-end rounded-[35px] px-4 py-2 text-2xl text-white bg-[white]"></div>
          )}
        </div>
        {Products.length === 0 && (
          <div className="col-span-5 justify-self-center">
            <ProgressBar
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="#DB5413"
              barColor="#FDD3BE"
            />
          </div>
        )}

        {Products &&
          Products.map((product) => (
            <DinamicCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}

export default ProductList;
