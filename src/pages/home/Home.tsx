
import CardEstaticoProdutoHome from "../../components/produto/cardProduto/CardEstaticoProdutoHome";
import SlideHome from "../../components/slide/home/SlideHome";

function Home() {

  return (
    <>
      <div className=" flex flex-col font-fontProjeto">
        <div className="flex items-center justify-center">
          <SlideHome />
        </div>

        <h1 className="text-8xl text-[#DB5413] font-bold py-14 text-center">Produtos</h1>

        <div className="flex space-x-3 items-center justify-between">
          <CardEstaticoProdutoHome nomeProduto="Apple Magic Mouse" precoProduto={499.90} fotoProduto="https://iili.io/JX18jbs.png" />
          <CardEstaticoProdutoHome nomeProduto="iPhone XR 256GB" precoProduto={1468.94} fotoProduto="https://iili.io/JX18G0N.png" />
          <CardEstaticoProdutoHome nomeProduto="Ursinho de Pelúcia" precoProduto={14.98} fotoProduto="https://iili.io/JX18LLx.png" />
          <CardEstaticoProdutoHome nomeProduto="Frigideira Antiaderente" precoProduto={56.00} fotoProduto="https://iili.io/JX18IfV.png" />
        </div>
      </div>
    </>
  )
}

export default Home;
