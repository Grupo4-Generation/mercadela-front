import EditarProduto from '../../crudProduto/editarProduto/EditarProduto';
import 'reactjs-popup/dist/index.css';
import '../modals.css';
import Popup from 'reactjs-popup';

function ModalCriarProduto(){
    return(
    <>
            <Popup
                trigger={<button
                    className=' mx-10 w-50 rounded-full cursor-pointer bg-[#13dbb7] px-2 py-1 text-2xl font-semibold hover:scale-105 text-white '>
                    Publicar Produto
                  </button>}modal><EditarProduto />
                    </Popup>
        </>
    );
}   
export default ModalCriarProduto;