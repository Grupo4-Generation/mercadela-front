import UserLogin from "../../models/UserLogin";

export const validateProfileInfo = (data: UserLogin) => {
  const errors: string[] = [];

  if (!data.name) errors.push("Nome é obrigatório");
  if (!data.cpf) errors.push("CPF é obrigatório");
  if (!data.gender) errors.push("Gênero é obrigatório");

  return errors;
};

export const validateProfileSecurity = (data: UserLogin) => {
  const errors: string[] = [];

  if (!data.email) errors.push("Email é obrigatório");
  if (!data.password) errors.push("Senha é obrigatória");

  // Adicionando validação de senha forte
  if (data.password && data.password.length < 8) {
    errors.push("A senha deve ter pelo menos 8 caracteres");
  }
  if (data.password && !/[A-Z]/.test(data.password)) {
    errors.push("A senha deve conter pelo menos uma letra maiúscula");
  }
  if (data.password && !/[a-z]/.test(data.password)) {
    errors.push("A senha deve conter pelo menos uma letra minúscula");
  }
  if (data.password && !/[0-9]/.test(data.password)) {
    errors.push("A senha deve conter pelo menos um número");
  }
  if (data.password && !/[$&+,:;=?@#|'<>.^*()%!-]/.test(data.password)) {
    errors.push("A senha deve conter pelo menos um caractere especial");
  }

  return errors;
};
