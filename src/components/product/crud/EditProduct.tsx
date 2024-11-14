import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../../../models/Product";
import { AuthContext } from "../../../contexts/AuthContext";
import Category from "../../../models/Category";
import {
  CreateWithToken,
  FindWithToken,
  Update,
} from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";

function EditProduct(selectedProduct: Product | any) {
  let navigate = useNavigate();

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  const [categories, setCategories] = useState<Category[]>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    description: "",
    photo: "",
    price: 0,
    category: null,
    user: user,
  });

  async function findProductById(id: number) {
    await FindWithToken(`/product/${id}`, setProduct, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findCategories() {
    setIsCategoriesLoading(true);
    await FindWithToken("/category", setCategories, {
      headers: {
        Authorization: token,
      },
    });
    setIsCategoriesLoading(false);
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "erro");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    findCategories();
    if (selectedProduct.id !== undefined) {
      findProductById(selectedProduct.id);
    }
  }, []);

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  }

  function handleUpdate() {
    window.location.reload(); // Força a recarga total da página
  }

  async function createProduct(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!product.category || product.category.id === 0) {
      toastAlerta("Selecione uma categoria", "erro");
      return;
    }

    if (selectedProduct.id !== undefined) {
      try {
        await Update(`/product`, product, setProduct, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toastAlerta("Produto atualizado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "erro");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar o produto", "erro");
        }
      }
      handleUpdate;
    } else {
      try {
        await CreateWithToken(`/product`, product, setProduct, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toastAlerta("Produto cadastrado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "erro");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar o produto", "erro");
        }
      }
      handleUpdate();
    }
  }

  return (
    <div className="font-fontProjeto text-[#DB5413] flex-col items-center w-[80vh] px-10 pb-10">
      <h1 className="text-4xl text-center my-8 font-bold">
        {selectedProduct.id !== undefined
          ? "Editar produto"
          : "Cadastrar produto"}
      </h1>

      <form onSubmit={createProduct} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 text-[#DB5413]">
          <label htmlFor="name" className="font-bold">
            Nome do produto
          </label>
          <input
            value={product.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            type="text"
            placeholder="Digite o nome do produto"
            name="name"
            required
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-bold">
            Descrição do produto
          </label>
          <input
            value={product.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            type="text"
            placeholder="Digite a descrição do produto"
            name="description"
            required
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price" className="font-bold">
            Preço do produto
          </label>
          <input
            value={product.price}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            type="number"
            placeholder="Digite o preço do produto"
            name="price"
            required
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="photo" className="font-bold">
            Foto do produto
          </label>
          <input
            value={product.photo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            type="url"
            placeholder="Insira a URL do produto"
            name="photo"
            required
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="font-bold">
            Categoria do produto
          </label>
          <select
            name="category"
            id="category"
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
            onChange={(e) => {
              const selectedCategory = categories.find(
                (cat) => cat.id === Number(e.currentTarget.value)
              );
              setProduct((prevProduct) => ({
                ...prevProduct,
                category: selectedCategory || null,
              }));
            }}
            value={product.category?.id || ""}
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button
          disabled={isCategoriesLoading}
          type="submit"
          onClick={handleUpdate}
          className="font-fontProjeto rounded-[20px] disabled:bg-slate-200 bg-[#13DBB7] hover:bg-[#0F9D84] text-white font-bold text-2xl px-10 mx-auto block py-2"
        >
          {isCategoriesLoading ? (
            <span>Carregando</span>
          ) : selectedProduct.id !== undefined ? (
            "Editar"
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
