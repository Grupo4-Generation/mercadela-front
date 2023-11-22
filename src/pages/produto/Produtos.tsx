import { useState, useEffect, useContext } from "react";
import Categoria from "../../models/Categoria";
import Produto from "../../models/Produto";
import { buscar } from "../../services/Service";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import CardProdutos from "./CardProdutos";
import ModalCriarProduto from "../../components/produto/modal/modalCriarProduto/ModalCriarProduto";

function Produtos() {
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>();
  const [filtroCategoria, setFiltroCategoria] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    } else {
      buscarCategorias();
      buscarProdutos();
    }
  }, [token]);

  async function buscarCategorias() {
    try {
      await buscar("/categoria", setCategorias, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  }

  async function buscarProdutos() {
    if (filtroCategoria === "") {
      try {
        await buscar("/produto", setProdutos, {
          headers: {
            Authorization: token,
          },
        });
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    } else {
      try {
        await buscar(`/produto/nomeProduto/${filtroCategoria}`, setProdutos, {
          headers: {
            Authorization: token,
          },
        });
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
  }

  function handleFiltroCategoria(nomeCategoria: string) {
    setFiltroCategoria(nomeCategoria);
  }

  return (
    <>
      <div className="flex">
        {/* Menu Lateral */}
        <div className="w-1/4 p-4 border-r">
          <h2 className="text-xl font-bold mb-2">Filtrar por Categoria</h2>
          <ul>
            <li
              onClick={() => handleFiltroCategoria("")}
              className="cursor-pointer mb-1"
            >
              Todos
            </li>
            {categorias.map((categoria) => (
              <li key={categoria.id} className="cursor-pointer mb-1">
                <button
                  onClick={() => handleFiltroCategoria(categoria.nomeCategoria)}
                >
                  {categoria.nomeCategoria}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Conteúdo Principal */}
        <div className="flex-1 p-4">
          <div className="flex flex-row justify-center text-center">
            <h1 className="text-3xl font-bold mb-4">Produtos</h1>
            <ModalCriarProduto />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {produtos &&
              produtos.map((produto) => (
                <CardProdutos
                  produto={produto}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Produtos;
