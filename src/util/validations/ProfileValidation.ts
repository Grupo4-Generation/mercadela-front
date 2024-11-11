import UserLogin from "../../models/UserLogin";

// Validação do perfil informativo
export const validateProfileInfo = (data: UserLogin) => {
  const errors: string[] = [];

  if (!data.name) errors.push("Nome é obrigatório");

  // Validação para CPF
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!data.cpf) {
    errors.push("CPF é obrigatório");
  } else if (!cpfRegex.test(data.cpf)) {
    errors.push("CPF inválido. Formato esperado: 000.000.000-00");
  }

  // Validação de gênero
  if (!data.gender) {
    errors.push("Gênero é obrigatório");
  } else if (!["Masculino", "Feminino", "Outro"].includes(data.gender)) {
    errors.push("Selecione um gênero válido");
  }

  return errors;
};

// Validação do perfil de segurança
export const validateProfileSecurity = (data: UserLogin) => {
  const errors: string[] = [];

  // Validação de e-mail: Aplica-se se o campo de email não estiver vazio.
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Email inválido");
  }

  if (!data.email) {
    errors.push("Email é obrigatório");
  }

  // Validação de senha
  if (data.password) {
    if (data.password.length < 8) {
      errors.push("A senha deve ter pelo menos 8 caracteres");
    }
    if (!/[A-Z]/.test(data.password)) {
      errors.push("A senha deve conter pelo menos uma letra maiúscula");
    }
    if (!/[a-z]/.test(data.password)) {
      errors.push("A senha deve conter pelo menos uma letra minúscula");
    }
    if (!/[0-9]/.test(data.password)) {
      errors.push("A senha deve conter pelo menos um número");
    }
    if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(data.password)) {
      errors.push("A senha deve conter pelo menos um caractere especial");
    }
  } else {
    errors.push("Senha é obrigatória");
  }

  return errors;
};
