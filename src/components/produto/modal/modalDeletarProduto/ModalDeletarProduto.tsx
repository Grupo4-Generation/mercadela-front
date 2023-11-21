import 'reactjs-popup/dist/index.css';
import '../modals.css';
import Popup from 'reactjs-popup';
import DeletarProduto from '../../deletarProduto/DeletarProduto';

function ModalDeletarProduto() {
    return (
        <>
            <Popup
                trigger={<button className=" flex rounded-full justify-center text-center cursor-pointer bg-[#fe322e] px-2 py-2 text-2xl font-semibold hover:scale-105 text-white ">deletar</button>}
                modal><DeletarProduto />
            </Popup>
        </>
    );
}
export default ModalDeletarProduto;