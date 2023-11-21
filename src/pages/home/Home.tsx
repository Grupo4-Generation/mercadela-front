import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListagemProduto from "../../components/produto/listagemProduto/ListagemProduto";
import ModalCriarProduto from "../../components/produto/modal/modalCriarProduto/ModalCriarProduto";
import SlideHome from "../../components/slide/home/SlideHome";
import { AuthContext } from "../../contexts/AuthContext";
import CardProduto from "../../components/produto/cardProduto/CardProduto";

function Home() {
  const { usuario } = useContext(AuthContext)

  const token = usuario.token
  const navigate = useNavigate()
  useEffect(() => {
    if (token === '') {
        alert('Você precisa estar logado')
        navigate('/login')
    }
}, [token])

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <SlideHome />
        </div>
        
        <div className="grid grid-cols-3 items-center">
          <h1 className=" row-start-1 col-start-2 text-3xl text-[#DB5413] font-bold py-7 text-center">Produtos</h1>
          <ModalCriarProduto/>
        </div>
        
        <div>
          <div>
            <hr className="border-[#DB5413] border-2 w-1/4 mx-auto" />
          </div>
        </div>
        <div className="flex px-3 items-center justify-between">
        </div>
      </div >
    </>
  )
}

export default Home;