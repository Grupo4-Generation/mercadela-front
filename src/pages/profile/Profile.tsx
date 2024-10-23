import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import UserLogin from "../../models/UserLogin";
import Product from "../../models/Product";
import { FindWitchToken } from "../../services/Service";
import { toastAlerta } from "../../util/toastAlerta";
import ProfileMenu from "../../components/profile/ProfileMenu";
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProfileSecurity from "../../components/profile/ProfileSecurity";
import ProfileProducts from "../../components/profile/ProfileProducts";


const Profile: React.FC = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const [formData, setFormData] = useState<UserLogin>(user);
  const [isUpdated, setIsUpdated] = useState(false);
  const [activeTab, setActiveTab] = useState("info");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsUpdated(JSON.stringify(formData) !== JSON.stringify(user));
  }, [formData, user]);

  useEffect(() => {
    if (activeTab === "products") {
      fetchUserProducts();
    }
  }, [activeTab]);

  const fetchUserProducts = async () => {
    try {
      await FindWitchToken(`/product/user/${user.id}`, setProducts, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
    } catch (error) {
      toastAlerta("Erro ao buscar produtos", "erro");
    }
  };

  const handleFormDataChange = (data: UserLogin) => {
    setFormData(data);
  };

  return (
    <div className="flex w-full">
      <ProfileMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLogout={handleLogout}
      />
      <div className="flex-grow p-4 bg-backgroundCard rounded-lg shadow-md">
        {activeTab === "info" && (
          <ProfileInfo
            formData={formData}
            setFormData={handleFormDataChange}
            isUpdated={isUpdated}
          />
        )}
        {activeTab === "security" && (
          <ProfileSecurity
            formData={formData}
            setFormData={handleFormDataChange}
            isUpdated={isUpdated}
          />
        )}
        {activeTab === "products" && <ProfileProducts products={products} />}
      </div>
    </div>
  );
};

export default Profile;
