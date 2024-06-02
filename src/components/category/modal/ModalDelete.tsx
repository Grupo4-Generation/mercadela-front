import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeletarCategoria from '../deletarCategoria/DeletarCategoria';

interface ModalDeleteProps {
    id: number
}

function ModalDelete({id} : ModalDeleteProps) {

    
    return (
        <>
            <Popup
                className='-content'
                trigger={
                    <button
                        className='text-[red] hover:bg-[#D1D1D1] '>
                        Deletar
                    </button>
                }
                modal
            >
                <DeletarCategoria id={id}/>
            </Popup>
        </>
    )
}

export default ModalDelete