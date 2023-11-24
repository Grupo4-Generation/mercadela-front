import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";
import Categoria from "../../../../models/Categoria";
import Produto from "../../../../models/Produto";
import { buscar, atualizar, cadastrar } from "../../../../services/Service";
import { toastAlerta } from "../../../../util/toastAlerta";

function EditarProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nomeCategoria: "",
    descricaoCategoria: "",
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nomeProduto: "",
    descricaoProduto: "",
    fotoProduto: "",
    precoProduto: 0,
    idCategoria: null,
    usuario: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produto/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar("/categoria", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "erro");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto((prevProduto) => ({
      ...prevProduto,
      idCategoria: categoria,
    }));
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
  }

  function retornar() {
    navigate("/load");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ produto });

    if (id !== undefined) {
      try {
        console.log({ produto });
        await atualizar(`/produto`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta("Produto atualizado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "erro");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar o Produto", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/produto`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Produto cadastrado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "erro");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar o Produto", "erro");
        }
      }
    }
  }

  const carregandoCategoria = categoria.nomeCategoria === "";

  return (
    <div className="font-fontProjeto text-[#DB5413] flex-col items-center w-[80vh] px-10 pb-10">
      <h1 className="text-4xl text-center my-8 font-bold">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 text-[#DB5413]">
          <label htmlFor="nomeProduto" className="font-bold">Nome do Produto</label>
          <input
            value={produto.nomeProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Digite o nome do produto"
            name="nomeProduto"
            required
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricaoProduto" className="font-bold">Descrição do produto</label>
          <input
            value={produto.descricaoProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Digite a descrição do produto"
            name="descricaoProduto"
            required
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="precoProduto" className="font-bold">Preço do produto</label>
          <input
            value={produto.precoProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Digite o preço do produto"
            name="precoProduto"
            required
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="fotoProduto" className="font-bold">Foto do produto</label>
          <input
            value={produto.fotoProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="url"
            placeholder="Insira a URL do produto"
            name="fotoProduto"
            required
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="idCategoria" className="font-bold">Categoria do Produto</label>
          <select
            name="idCategoria"
            id="idCategoria"
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
            value={produto.idCategoria?.id || ""}
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nomeCategoria}
              </option>
            ))}
          </select>
        </div>

        <button
          disabled={carregandoCategoria}
          type="submit"
          className="font-fontProjeto rounded-[20px] disabled:bg-slate-200 bg-[#13DBB7] hover:bg-[#0F9D84] text-white font-bold text-2xl px-10 mx-auto block py-2"
        >
          {carregandoCategoria ? (
            <span>Carregando</span>
          ) : id !== undefined ? (
            "Editar"
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default EditarProduto;
