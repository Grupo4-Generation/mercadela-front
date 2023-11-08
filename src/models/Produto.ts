import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
  id: number;
  nomeProduto: string;
  descricaoProduto: string;
  precoProduto: number;
  idCategoria: Categoria | null;
  usuario: Usuario | null;
}