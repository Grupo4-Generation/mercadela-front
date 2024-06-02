import { useContext, useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import { toastAlerta } from "../../../util/toastAlerta";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import "./Listacategory.css";

import Formulariocategory from "../categoryForm/CategoryForm";
import { useNavigate } from "react-router-dom";
import Category from "../../../models/Category";
import { FindWitchToken } from "../../../services/Service";
import CategoryCard from "../categoryCard/CategoryCard";

function CategoryList() {
  const [category, setcategory] = useState<Category[]>([]);

  const { user, handleLogout } = useContext(AuthContext);
  const token = user.token;

  const navigate = useNavigate();

  useEffect(() => {
    if (token === '') {
        toastAlerta("Sessão expirada...", "erro");
        navigate('/');
    }
}, [token])

  async function categoryFind() {
    try {
      await FindWitchToken("/category", setcategory, {
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
    categoryFind();
  }, [category.length]);

  return (
    <>
      <div className="font-fontProjeto font-bold container z-0 w-[80vw] px-[1vw] mx-auto my-0 grid grid-cols-3 gap-4">
        <div className="col-span-3 flex justify-between items-center mt-8 mb-10">

          <div className="col-start-1 justify-self-end rounded-[35px] px-4 py-2 text-2xl text-white bg-[white]"></div>

          <h1 className="text-center text-6xl text-[#DB5413] font-bold">
            categorys
          </h1>

          {user.gender === "Admin" ? (
            <Popup
              className="-content"
              trigger={
                <button className="flex justify-items-end border rounded-[35px] px-4 py-2 text-2xl text-white bg-[#13DBB7] hover:bg-[#0F9D84]">
                  + criar
                </button>
              }
              modal
            >
              <Formulariocategory />
            </Popup>
          ) : <div className="col-start-1 justify-self-end rounded-[35px] px-4 py-2 text-2xl text-white bg-[white]"></div>}

        </div>

        {category.length === 0 && (
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

        {category.map((category) => (
          <>
            <CategoryCard key={category.id} category={category} />
          </>
        ))}
      </div>
    </>
  );
}

export default CategoryList;