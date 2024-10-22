import StaticCard from "../../components/product/cardProduto/StaticCard";
import SlideHome from "../../components/slide/home/SlideHome";

function Home() {
  return (
    <>
      <div className="flex flex-col font-fontProjeto">
        <div className="flex items-center justify-center">
          <SlideHome />
        </div>

        <h1 className="text-8xl text-primary font-bold py-14 text-center">
          Produtos
        </h1>

        <div className="flex space-x-3 items-center justify-between">
          <StaticCard
            nomeProduto="Apple Magic Mouse"
            precoProduto={499.9}
            fotoProduto="https://iili.io/JX18jbs.png"
          />
          <StaticCard
            nomeProduto="iPhone XR 256GB"
            precoProduto={1468.94}
            fotoProduto="https://iili.io/JX18G0N.png"
          />
          <StaticCard
            nomeProduto="Ursinho de Pelúcia"
            precoProduto={14.98}
            fotoProduto="https://iili.io/JX18LLx.png"
          />
          <StaticCard
            nomeProduto="Frigideira Antiaderente"
            precoProduto={56.0}
            fotoProduto="https://iili.io/JX18IfV.png"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
