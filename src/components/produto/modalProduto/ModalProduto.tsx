import EditarProduto from '../editarProduto/EditarProduto';
import 'reactjs-popup/dist/index.css';
import './modalPostagem.css';
import Popup from 'reactjs-popup';

function ModalProduto(){
    return(
    <>
            <Popup
                trigger={<button 
                        className='flex justify-center text-center rounded-full cursor-pointer bg-[#13dbb7] px-2 py-2 text-2xl font-semibold hover:scale-105 text-white'>
                        editar
                    </button>}modal><EditarProduto />
                    </Popup>
        </>
    );
}   
export default ModalProduto;