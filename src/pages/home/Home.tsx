import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SlideHome from "../../components/slide/home/SlideHome";
import Product from "../../models/Product";
import { FindWithoutToken } from "../../services/Service";
import HomeCard from "../../components/product/productCard/HomeCard";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to shuffle products and pick 4 randomly
    const shuffleAndPick = (products: Product[]) => {
      const shuffled = products.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    };

    // Fetch products from backend
    FindWithoutToken("/product", (data: Product[]) => {
      setProducts(shuffleAndPick(data));
    });
  }, []);

  return (
    <div className="flex flex-col font-fontProjeto">
      <div className="flex items-center justify-center">
        <SlideHome />
      </div>


      <div className="flex my-10 space-x-3 items-center justify-between">
        {products.map((product, index) => (
          <HomeCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;