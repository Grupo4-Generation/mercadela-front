import { useState, useEffect, useContext } from "react";
import { buscar } from "../../services/Service";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import Produto from "../../models/Produto";
import CardProdutos from "./CardProdutos";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import EditarProduto from "../../components/produto/crudProduto/editarProduto/EditarProduto";
import { toastAlerta } from "../../util/toastAlerta";
import { ProgressBar } from "react-loader-spinner";

function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProdutos() {
    try {
      await buscar("/produto", setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("Sessão expirada...", "erro");
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      <div className="font-fontProjeto font-bold container z-0 w-[80vw] px-[1vw] mx-auto my-0 grid grid-cols-5 gap-4">
        <div className="col-span-5 flex justify-between items-center mt-8 mb-10">
          <div className="px-4 py-2 text-2xl text-white bg-[white] hover:bg-[#0F9D84]"></div>

          <h1 className="text-center text-6xl text-[#DB5413] font-bold">
            Produtos
          </h1>

          <Popup
            trigger={
              <button className="flex justify-items-end border rounded-[35px] px-4 py-2 text-2xl text-white bg-[#13DBB7] hover:bg-[#0F9D84]">
                + criar
              </button>
            }
            modal
          >
            <EditarProduto />
          </Popup>
        </div>

        {produtos.length === 0 && (
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#DB5413"
            barColor="#FDD3BE"
          />
        )}

        {produtos &&
          produtos.map((produto) => (
            <CardProdutos key={produto.id} produto={produto} />
          ))}
      </div>
    </>
  );
}

export default Produtos;
