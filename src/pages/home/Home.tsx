
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
          <CardEstaticoProdutoHome nomeProduto="Apple Magic Mouse" precoProduto={499.90} fotoProduto="https://cdn.discordapp.com/attachments/1139577278892875785/1177254215467401258/mouse.png" />
          <CardEstaticoProdutoHome nomeProduto="iPhone XR 256GB" precoProduto={1468.94} fotoProduto="http://cdn.discordapp.com/attachments/1139577278892875785/1177245722710655006/iphone.png" />
          <CardEstaticoProdutoHome nomeProduto="Escova de Cabelo" precoProduto={14.98} fotoProduto="http://cdn.discordapp.com/attachments/1139577278892875784/1177225007064158290/Pente.png" />
          <CardEstaticoProdutoHome nomeProduto="Frigideira Antiaderente" precoProduto={56.00} fotoProduto="http://cdn.discordapp.com/attachments/1139577278892875785/1177250791543799858/frigideira.png" />
        </div>
      </div>
    </>
  )
}

export default Home;
