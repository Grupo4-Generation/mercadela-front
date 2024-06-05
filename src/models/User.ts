import Product from "./Product";

export default interface User {
    id: number;
    cpf: string | null;
    name: string | null;
    email: string;
    password: string;
    gender: string;
    photo: string;
    product?: Product | null;
  }