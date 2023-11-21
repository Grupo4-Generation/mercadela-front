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
                        className='flex justify-items-end border rounded-[35px] px-4 py-2 text-2xl text-white bg-[#13DBB7] hover:bg-[#0F9D84]'>
                        + criar
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