import EditarProduto from '../../editarProduto/EditarProduto';
import 'reactjs-popup/dist/index.css';
import '../modals.css';
import Popup from 'reactjs-popup';

function ModalCriarProduto(){
    return(
    <>
            <Popup
                trigger={<button
                    className=' row-start-1 col-start-3 w-40 rounded-full cursor-pointer bg-[#13dbb7] px-2 py-2 text-2xl font-semibold hover:scale-105 text-white '>
                    Publicar Produto
                  </button>}modal><EditarProduto />
                    </Popup>
        </>
    );
}   
export default ModalCriarProduto;