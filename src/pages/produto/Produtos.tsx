import { useState, useEffect, useContext } from "react";
import Categoria from "../../models/Categoria";
import Produto from "../../models/Produto";
import { buscar } from "../../services/Service";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate, useNavigation } from "react-router-dom";

function Produtos() {
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [filtroCategoria, setFiltroCategoria] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    buscarCategorias();
    buscarProdutos();
  }, []);

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
    try {
      // Update the endpoint to the correct one for fetching products
      await buscar("/produto", setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  function handleFiltroCategoria(categoriaId: number | null) {
    setFiltroCategoria(categoriaId);
  }

  return (
    <div className="flex">
      {/* Menu Lateral */}
      <div className="w-1/4 p-4 border-r">
        <h2 className="text-xl font-bold mb-2">Filtrar por Categoria</h2>
        <ul>
          <li
          
            onClick={() => handleFiltroCategoria(null)}
            className="cursor-pointer mb-1"
          >
            Todos
          </li>
          {categorias.map((categoria) => (
            <li
              key={categoria.id}
              onClick={() => handleFiltroCategoria(categoria.id)}
              className="cursor-pointer mb-1"
            >
              {categoria.nomeCategoria}
            </li>
          ))}
        </ul>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">Produtos</h1>
        <div className="grid grid-cols-3 gap-4">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-white p-4 rounded shadow">
              <img
                src={produto.fotoProduto}
                alt={produto.nomeProduto}
                className="w-full h-32 object-cover mb-2"
              />
              <h3 className="text-xl font-bold mb-2">{produto.nomeProduto}</h3>
              <p className="text-gray-600 mb-2">{produto.descricaoProduto}</p>
              <p className="text-green-600 font-bold">{`R$ ${produto.precoProduto.toFixed(
                2
              )}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Produtos;
