import React, { useEffect, useContext, useState } from "react";
import Product from "../../models/Product";
import { AuthContext } from "../../contexts/AuthContext";
import { FindWithToken } from "../../services/Service";
import { toastAlerta } from "../../util/toastAlerta";
import DinamicCard from "../product/productCard/DinamicCard";

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
      await FindWithToken(`/product/user/${user.id}`, setUserProducts, {
        headers: { Authorization: `${user.token}` },
      });
    } catch (error) {
      toastAlerta("Erro ao buscar produtos", "erro");
    }
  };

  return (
    <>
      <h1 className="flex justify-center text-lg font-bold text-primary mb-4">
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
