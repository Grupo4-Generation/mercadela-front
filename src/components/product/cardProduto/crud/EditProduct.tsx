import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";

import { toastAlerta } from "../../../../util/toastAlerta";
import Category from "../../../../models/Category";
import Product from "../../../../models/Product";
import { CreateWitchToken, FindWitchToken, Update } from "../../../../services/Service";

function EditProduct(selectedProduct: Product | any) {
  let navigate = useNavigate();

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  const [categories, setCategories] = useState<Category[]>([]);
  const [category, setcategory] = useState<Category>({
    id: 0,
    name: "",
    description: "",
  });

  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    description: "",
    photo: "",
    price: 0,
    category: null,
    user: null,
  });

  async function findProductById(id: number) {
    await FindWitchToken(`/product/${id}`, setProduct, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarcategoryPorId(id: string) {
    await FindWitchToken(`/category/${id}`, setcategory, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findCategories() {
    await FindWitchToken("/category", setCategories, {
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
    findCategories();
    if (selectedProduct.id !== undefined) {
      findProductById(selectedProduct.id);
    }
  }, []);

  useEffect(() => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      idcategory: category,
    }));
  }, [category]);

  function updateState(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  }

  function back() {
    navigate("/loadProduct");
  }

  async function createProduct(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ product });

    if (selectedProduct.id !== undefined) {
      try {
        console.log({ product });
        await Update(`/product`, product, setProduct, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta("product atualizado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "erro");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar o product", "erro");
        }
      }
      back();

    } else {
      try {
        await CreateWitchToken(`/product`, product, setProduct, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("product cadastrado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "erro");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar o product", "erro");
        }
      }
      back();
    }
  }

  const loadingCategory = category.name === "";

  return (
    <div className="font-fontProjeto text-[#DB5413] flex-col items-center w-[80vh] px-10 pb-10">
      <h1 className="text-4xl text-center my-8 font-bold">
        {selectedProduct.id !== undefined ? "Editar product" : "Cadastrar product"}
      </h1>

      <form onSubmit={createProduct} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 text-[#DB5413]">
          <label htmlFor="nomeproduct" className="font-bold">Nome do product</label>
          <input
            value={product.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            type="text"
            placeholder="Digite o nome do product"
            name="nomeproduct"
            required
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricaoproduct" className="font-bold">Descrição do product</label>
          <input
            value={product.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            type="text"
            placeholder="Digite a descrição do product"
            name="descricaoproduct"
            required
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="precoproduct" className="font-bold">Preço do product</label>
          <input
            value={product.price}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            type="number"
            placeholder="Digite o preço do product"
            name="precoproduct"
            required
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="fotoproduct" className="font-bold">Foto do product</label>
          <input
            value={product.photo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            type="url"
            placeholder="Insira a URL do product"
            name="fotoproduct"
            required
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="idcategory" className="font-bold">category do product</label>
          <select
            name="idcategory"
            id="idcategory"
            className="p-1 w-full border border-gray-300 text-[black] rounded-3xl pl-5 italic focus:outline-none"
            onChange={(e) => buscarcategoryPorId(e.currentTarget.value)}
            value={product.category?.id || ""}
          >
            <option value="" disabled>
              Selecione uma category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button
          disabled={loadingCategory}
          type="submit"
          className="font-fontProjeto rounded-[20px] disabled:bg-slate-200 bg-[#13DBB7] hover:bg-[#0F9D84] text-white font-bold text-2xl px-10 mx-auto block py-2"
        >
          {loadingCategory ? (
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