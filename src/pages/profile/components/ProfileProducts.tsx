import React, { useEffect, useContext, useState } from "react";
import { toastAlerta } from "../../../util/toastAlerta";
import Product from "../../../models/Product";
import { FindWitchToken } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import DinamicCard from "../../../components/product/cardProduto/DinamicCard";

interface ProfileProductsProps {
  products: Product[];
}

const ProfileProducts: React.FC<ProfileProductsProps> = ({ products }) => {
  const { user } = useContext(AuthContext);
  const [userProducts, setUserProducts] = useState<Product[]>(products || []);

  useEffect(() => {
    if (user?.id) {
      fetchUserProducts();
    }
  }, [user]);

  const fetchUserProducts = async () => {
    try {
      await FindWitchToken(`/product/user/${user.id}`, setUserProducts, {
        headers: { Authorization: `${user.token}` },
      });
    } catch (error) {
      toastAlerta("Erro ao buscar produtos", "erro");
    }
  };

  return (
    <>
      <h1 className="text-[#DB5413] text-3xl text-center mb-5">
        Meus Produtos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {userProducts &&
          userProducts.map((product) => (
            <DinamicCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default ProfileProducts;
