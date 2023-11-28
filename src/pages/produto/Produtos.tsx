import { useState, useEffect, useContext } from "react";
import { buscarSemToken } from "../../services/Service";

import Produto from "../../models/Produto";
import CardProdutos from "./CardProdutos";
import "reactjs-popup/dist/index.css";
import { toastAlerta } from "../../util/toastAlerta";
import { ProgressBar } from "react-loader-spinner";
import Popup from "reactjs-popup";
import { AuthContext } from "../../contexts/AuthContext";
import EditarProduto from "./crudProduto/EditarProduto";

function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const { usuario } = useContext(AuthContext);
  async function buscarProdutos() {
    try {
      await buscarSemToken("/produto", setProdutos);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("Sessão expirada...", "erro");
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      <div className="font-fontProjeto font-bold container w-[80vw] px-[1vw] grid grid-cols-5 gap-5">
        <div className="col-span-5 grid grid-col-3 gap-4 items-center mt-8 mb-10">
          <div className="col-start-1 justify-self-end rounded-[35px] px-4 py-2 text-2xl text-white bg-[white]"></div>

          <h1 className="col-start-2 justify-self-center px-4 text-6xl text-[#DB5413] font-bold">
            Produtos
          </h1>
          {usuario.generoUsuario === "Feminino" ||
          usuario.generoUsuario === "Outros" ||
          usuario.generoUsuario === "Admin" ? (
            <Popup
              trigger={
                <button className="col-start-3 justify-self-end border rounded-[35px] px-4 py-2 text-2xl text-white bg-[#13DBB7] hover:bg-[#0F9D84]">
                  + criar
                </button>
              }
              modal
            >
              <EditarProduto />
            </Popup>
          ) : (
            <div className="col-start-3 justify-self-end rounded-[35px] px-4 py-2 text-2xl text-white bg-[white]"></div>
          )}
        </div>
        {produtos.length === 0 && (
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

        {produtos &&
          produtos.map((produto) => (
            <CardProdutos key={produto.id} produto={produto} />
          ))}
      </div>
    </>
  );
}

export default Produtos;
