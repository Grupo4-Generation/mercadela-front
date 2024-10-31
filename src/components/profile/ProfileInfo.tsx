import React, { useState } from "react";
import UserLogin from "../../models/UserLogin";
import { Update } from "../../services/Service";
import { toastAlerta } from "../../util/toastAlerta";
import { validateProfileInfo } from "../../util/validations/ProfileValidation";

interface ProfileInfoProps {
  formData: UserLogin;
  setFormData: (data: UserLogin) => void;
  isUpdated: boolean;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  formData,
  setFormData,
  isUpdated,
}) => {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as keyof UserLogin]: value });

    // Validação em tempo real
    const errors = validateProfileInfo({ ...formData, [name]: value });
    setValidationErrors(errors);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await Update("/user/update", formData, setFormData, {
      headers: { Authorization: `Bearer ${formData.token}` },
    });
    toastAlerta("Usuário atualizado com sucesso", "sucesso");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col items-center">
        {formData.photo && (
          <img
            src={formData.photo}
            alt="Foto do usuário"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
        )}
        <h2 className="flex justify-center text-lg font-bold text-primary mb-4">
          Dados do Usuário
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-text">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            className={`mt-1 p-2 border border-gray-300 rounded-md w-full ${
              validationErrors.includes("Nome é obrigatório")
                ? "border-red-500"
                : ""
            }`}
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text">CPF</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf || ""}
            onChange={handleChange}
            className={`mt-1 p-2 border border-gray-300 rounded-md w-full ${
              validationErrors.includes("CPF é obrigatório")
                ? "border-red-500"
                : ""
            }`}
            placeholder="Seu CPF"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text">Gênero</label>
          <select
            name="gender"
            value={formData.gender || ""}
            onChange={handleChange}
            className={`mt-1 p-2 border border-gray-300 rounded-md w-full ${
              validationErrors.includes("Gênero é obrigatório")
                ? "border-red-500"
                : ""
            }`}
          >
            <option value="" disabled>
              Selecione seu gênero
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-text">Foto</label>
          <input
            type="text"
            name="photo"
            value={formData.photo || ""}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="URL da foto"
          />
        </div>
      </div>

      <div className="text-red-500">
        {validationErrors.map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </div>

      <button
        type="submit"
        disabled={!isUpdated}
        className={`w-full mt-4 ${
          !isUpdated ? "bg-gray-300 cursor-not-allowed" : "bg-[#DB5413]"
        }`}
      >
        Salvar
      </button>
    </form>
  );
};

export default ProfileInfo;
