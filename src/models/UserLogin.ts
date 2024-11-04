import Product from "./Product";

export default interface UserLogin {
  id: number;
  email: string;
  password: string;
  name: string | null;
  cpf: string | null;
  gender: string | null;
  photo: string | null;
  token: string;
  admin: boolean | null;
  products?: Product[];
}
