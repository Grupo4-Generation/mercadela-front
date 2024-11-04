import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

interface ProfileMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  const handleLogoutAndRedirect = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <div className="min-w-[200px] max-w-[300px] bg-backgroundLight p-4 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4 text-[#DB5413]">Menu</h2>
      <ul className="space-y-2">
        {["info", "security", "products"].map((tab) => (
          <li key={tab}>
            <button
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left p-2 rounded-md transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-[#DB5413] text-white font-bold"
                  : "text-[#983854] hover:bg-gray-200"
              }`}
            >
              {tab === "info" && "Informações da Conta"}
              {tab === "security" && "Segurança"}
              {tab === "products" && "Meus Produtos"}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleLogoutAndRedirect} // Usando a nova função para o botão de logout
        className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
      >
        Sair
      </button>
    </div>
  );
};

export default ProfileMenu;
