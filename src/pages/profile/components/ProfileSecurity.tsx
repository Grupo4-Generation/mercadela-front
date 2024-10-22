import React from "react";
import UserLogin from "../../../models/UserLogin";
import { Update } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";

interface ProfileSecurityProps {
  formData: UserLogin;
  setFormData: (data: UserLogin) => void;
  isUpdated: boolean;
}

const ProfileSecurity: React.FC<ProfileSecurityProps> = ({
  formData,
  setFormData,
  isUpdated,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as keyof UserLogin]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await Update("/user/update", formData, setFormData, {
      headers: { Authorization: `Bearer ${formData.token}` },
    });
    toastAlerta("Senha e e-mail atualizados com sucesso", "sucesso");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-lg font-bold text-primary mb-4">
        Segurança da Conta
      </h2>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-text">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Seu e-mail"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text">
            Nova Senha
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Digite sua nova senha"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text">
            Confirme a Senha
          </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Confirme sua nova senha"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!isUpdated}
        className={`w-full mt-4 ${
          !isUpdated ? "bg-gray-300 cursor-not-allowed" : "bg-[#DB5413]"
        } text-white font-semibold py-2 rounded-md hover:bg-[#C44A11] transition duration-200`}
      >
        Salvar
      </button>
    </form>
  );
};

export default ProfileSecurity;
