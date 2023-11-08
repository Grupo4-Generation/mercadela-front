import Produto from "./Produto";

export default interface Usuario {
    id: number;
    nomeUsuario: string;
    emailUsuario: string;
    senhaUsuario: string;
    generoUsuario: string;
    foto: string;
    produto?: Produto | null;
  }