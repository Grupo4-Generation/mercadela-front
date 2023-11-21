import SlideHome from "../../components/slide/home/SlideHome";
import CardHome from "./cardHome/CardHome";

function Home() {

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <SlideHome />
        </div>

        <h1 className="font-fontProjeto text-6xl text-[#DB5413] font-bold py-10 text-center">Produtos</h1>

        <div className="flex space-x-3 items-center justify-between pb-20">
          <CardHome nomeProduto="Pente" precoProduto="R$ 12,98" fotoProduto="src/assets/Pente.png" />
          <CardHome nomeProduto="Pente" precoProduto="R$ 12,98" fotoProduto="src/assets/Pente.png" />
          <CardHome nomeProduto="Pente" precoProduto="R$ 12,98" fotoProduto="src/assets/Pente.png" />
          <CardHome nomeProduto="Pente" precoProduto="R$ 12,98" fotoProduto="src/assets/Pente.png" />
          <CardHome nomeProduto="Pente" precoProduto="R$ 12,98" fotoProduto="src/assets/Pente.png" />
        </div>
      </div>
    </>
  )
}

export default Home;