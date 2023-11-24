import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";

import Produto from "../../models/Produto";
import EditarProduto from "../../components/produto/crudProduto/editarProduto/EditarProduto";
import Deletarproduto from "../../components/produto/crudProduto/deletarProduto/DeletarProduto";

import "../../models/Produto";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { toastAlerta } from "../../util/toastAlerta";

function PageProduto() {
  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const navigate = useNavigate();
  const [quantidade, setQuantidade] = useState<number>(1);
  const [produto, setProduto] = useState<Produto>({} as Produto);
  async function buscarPorId(id: string) {
    try {
      await buscar(`/produto/${id}`, setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "erro");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  let handleClick = () => {
    toastAlerta("Compra efetuada com sucesso!", "sucesso");
  };
  let adicionar = () => {
    setQuantidade(quantidade + 1);
  };
  let subtrair = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    } else {
      toastAlerta("Quantidade mínima atingida!", "erro");
    }
  };
  let precoFormatado = (produto.precoProduto / 1).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <div className="flex m-0 items-center justify-center font-fontProjeto">
        <img
          className="shadow-2xl max-w-sm rounded-lg object-cover object-center bg-white-500"
          src={produto.fotoProduto}
          alt="product"
        />
        <div className="flex flex-col flex-wrap pl-5">
          <div className="my-5 flex ml-4 align-top">
            <p className="align-top font-bold text-5xl text-justify text-[#d95613]">
              {produto?.nomeProduto}
            </p>
          </div>
          <div className="ml-4 mr-6">
            <p className="text-justify max-w-md">{produto.descricaoProduto}</p>
          </div>
          <div className="my-5 flex ml-4">
            <p className="font-bold text-5xl text-justify text-[#13dbb7]">
              {precoFormatado}
            </p>
          </div>
          <div className="flex space-x-20 pl-4">
            <div className="flex items-center py-4 px-5 box-border border-[#bd5c46] border-4 rounded-full text-2xl font-semibold hover:scale-10 w-35">
              <button onClick={subtrair} className="px-2 text-[#bd5c46]">
                -
              </button>
              <span className="px-2">{quantidade}</span>
              <button onClick={adicionar} className="px-2 text-[#13dbb7] ">
                +
              </button>
            </div>
            <div className="my-2 flex ml-4">
              <button
                onClick={handleClick}
                className="rounded-full cursor-pointer bg-[#13dbb7] px-4 text-2xl font-semibold hover:scale-105 text-white"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-96 justify-between flex-col">
          {usuario.generoUsuario === "Feminino" ||
          usuario.generoUsuario === "Outros" ||
          usuario.generoUsuario === "Admin"
          ? (
            <Popup
              trigger={
                <button className="rounded-full px-4 py-2 text-2xl text-white bg-[#13DBB7] hover:bg-[#0F9D84] font-bold hover:scale-105">
                  editar
                </button>
              }
              modal
            >
              <EditarProduto />
            </Popup>
          ) : null}
          {usuario.generoUsuario === "Feminino" ||
          usuario.generoUsuario === "Outros" ||
          usuario.generoUsuario === "Admin"
          ? (
            <Popup
              trigger={
                <button className=" flex rounded-full justify-center text-center cursor-pointer bg-[#fe322e] px-2 py-2 text-2xl font-semibold hover:scale-105 hover:bg-[#B60E0E] text-white ">
                  deletar
                </button>
              }
              modal
            >
              <Deletarproduto />
            </Popup>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default PageProduto;