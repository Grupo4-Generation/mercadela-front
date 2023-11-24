import { useContext, useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";

import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";

import { toastAlerta } from "../../../util/toastAlerta";

import Categoria from "../../../models/Categoria";
import CardCategoria from "../cardCategoria/CardCategorias";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import "./ListaCategoria.css";

import FormularioCategoria from "../formularioCategoria/FormularioCategoria";

function ListaCategorias() {
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategoria() {
    try {
      await buscar("/categoria", setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("Erro, tente novamente", "erro");
        handleLogout();
      }
    }
  }

  

  useEffect(() => {
    buscarCategoria();
  }, [categoria.length]);

  return (
    <>
      <div className="font-fontProjeto font-bold container z-0 w-[80vw] px-[1vw] mx-auto my-0 grid grid-cols-3 gap-4">
        <div className="col-span-3 flex justify-between items-center mt-8 mb-10">

          <div className="col-start-1 justify-self-end rounded-[35px] px-4 py-2 text-2xl text-white bg-[white]"></div>

          <h1 className="text-center text-6xl text-[#DB5413] font-bold">
            Categorias
          </h1>

          {usuario.generoUsuario === "Admin" ? (
            <Popup
              className="-content"
              trigger={
                <button className="flex justify-items-end border rounded-[35px] px-4 py-2 text-2xl text-white bg-[#13DBB7] hover:bg-[#0F9D84]">
                  + criar
                </button>
              }
              modal
            >
              <FormularioCategoria />
            </Popup>
          ) : <div className="col-start-1 justify-self-end rounded-[35px] px-4 py-2 text-2xl text-white bg-[white]"></div>}

        </div>

        {categoria.length === 0 && (
          <div className="col-span-3 justify-self-center">
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

        {categoria.map((categoria) => (
          <>
            <CardCategoria key={categoria.id} categoria={categoria} />
          </>
        ))}
      </div>
    </>
  );
}

export default ListaCategorias;
