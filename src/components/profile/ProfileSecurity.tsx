import React, { useState } from "react";
import UserLogin from "../../models/UserLogin";
import { toastAlerta } from "../../util/toastAlerta";
import { Update } from "../../services/Service";
import { validateProfileSecurity } from "../../util/validations/ProfileValidation";
import { CheckCircle, Eye, EyeSlash, XCircle } from "@phosphor-icons/react";

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
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Função de validação de email
  const validateEmail = (email: string) => {
    const errors: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.push("Email é obrigatório.");
    } else if (!emailRegex.test(email)) {
      errors.push("Email inválido.");
    }
    return errors;
  };

  // Função de validação de senha
  const validatePassword = (password: string) => {
    const errors: string[] = [];
    if (!password) {
      errors.push("Senha é obrigatória.");
    } else {
      const passwordErrors = validateProfileSecurity({ ...formData, password });
      errors.push(...passwordErrors);
    }
    return errors;
  };

  // Função de alteração nos campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as keyof UserLogin]: value });

    if (name === "password") {
      const errors = validatePassword(value); // Valida apenas a senha
      setPasswordErrors(errors);
    }

    if (name === "email") {
      const emailValidationErrors = validateEmail(value); // Valida apenas o email
      setEmailErrors(emailValidationErrors);
    }
  };

  // Função de envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await Update("/user/update", formData, setFormData, {
      headers: { Authorization: `Bearer ${formData.token}` },
    });
    toastAlerta("Senha e e-mail atualizados com sucesso", "sucesso");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" autoComplete="on">
      <h2 className="flex justify-center text-lg font-bold text-primary mb-4">
        Segurança da Conta
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {/* Campo de Email */}
        <div>
          <label className="block text-sm font-medium text-text">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            className={`mt-1 p-2 bg-backgroundHeader shadow-md rounded-lg z-10 w-full ${
              emailErrors.length ? "border-red-500" : "border-gray-300"
            } rounded-md w-full`}
            placeholder="Seu e-mail"
            autoComplete="email"
          />
          {emailErrors.length > 0 && (
            <div className="text-red-500 text-sm mt-1">
              {emailErrors.map((error, index) => (
                <div key={index} className="flex items-center">
                  <XCircle className="mr-1" size={16} />
                  {error}
                </div>
              ))}
            </div>
          )}
          {emailErrors.length === 0 && formData.email && (
            <div className="text-green-500 text-sm mt-1">
              <div className="flex items-center">
                <CheckCircle className="mr-1" size={16} />
                Email válido
              </div>
            </div>
          )}
        </div>

        {/* Campo de Senha */}
        <div>
          <label className="block text-sm font-medium text-text">
            Nova Senha
          </label>
          <div className="flex items-center ">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password || ""}
              onChange={handleChange}
              className={`mt-1 p-2 bg-backgroundHeader shadow-md rounded-lg z-10 w-full ${
                passwordErrors.length ? "border-red-500" : "border-none"
              }`}
              placeholder="Digite sua nova senha"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="rounded-r-md bg-gray-200 hover:bg-gray-300"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? (
                <EyeSlash
                  className="bg-backgroundHeader shadow-md rounded-lg z-10 w-full"
                  size={20}
                />
              ) : (
                <Eye
                  className="bg-backgroundHeader shadow-md rounded-lg z-10 w-full"
                  size={20}
                />
              )}
            </button>
          </div>
          {passwordErrors.length > 0 && (
            <div className="text-red-500 text-sm mt-1">
              {passwordErrors.map((error, index) => (
                <div key={index} className="flex items-center">
                  <XCircle className="mr-1" size={16} />
                  {error}
                </div>
              ))}
            </div>
          )}
          {passwordErrors.length === 0 && formData.password && (
            <div className="text-green-500 text-sm mt-1">
              <div className="flex items-center">
                <CheckCircle className="mr-1" size={16} />
                Senha válida
              </div>
            </div>
          )}
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
