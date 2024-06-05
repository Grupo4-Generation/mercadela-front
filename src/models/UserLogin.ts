export default interface UserLogin {

    id: number;
    cpf: string | null;
    name: string | null;
    email: string;
    password: string;
    gender: string;
    token: string;
}