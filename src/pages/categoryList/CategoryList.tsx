import { useContext, useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import Category from "../../models/Category";
import { FindWithoutToken } from "../../services/Service";
import CategoryCard from "../../components/category/categoryCard/CategoryCard";
import CategoryForm from "../../components/category/categoryForm/CategoryForm";

function CategoryList() {
  const [category, setCategory] = useState<Category[]>([]);
  const { user, handleLogout } = useContext(AuthContext);

  async function categoryFind() {
    try {
      await FindWithoutToken("/category", setCategory);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("Erro, tente novamente", "erro");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    categoryFind();
  }, [category.length]);

  return (
    <div className="font-fontProjeto font-bold container z-0 w-[80vw] px-[1vw] mx-auto grid grid-cols-3 gap-4 mt-4">
      <header className="col-span-3 flex justify-between items-center mb-10">
        <h1 className="text-6xl text-primary font-bold text-center flex-1">
          Categorias
        </h1>

        {user.admin && (
          <Popup
            className="bg-backgroundLight rounded-2xl p-4 w-auto justify-center"
            trigger={
              <button className="rounded cursor-pointer bg-secondary hover:bg-hoverSecondary px-4 py-2 text-lg font-semibold transition-transform hover:scale-105 text-white">
                Criar Categoria
              </button>
            }
            modal
          >
            <CategoryForm />
          </Popup>
        )}
      </header>

      {category.length === 0 ? (
        <div className="col-span-3 flex justify-center">
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperClass="progress-bar-wrapper"
            borderColor="#DB5413"
            barColor="#FDD3BE"
          />
        </div>
      ) : (
        category.map((cat) => <CategoryCard key={cat.id} category={cat} />)
      )}
    </div>
  );
}

export default CategoryList;
