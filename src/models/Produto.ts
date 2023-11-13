import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nomeProduto: string;
  descricaoProduto: string;
  precoProduto: number;
  fotoProduto: string;
  idCategoria: Categoria | null;
  usuario: Usuario | null;
}