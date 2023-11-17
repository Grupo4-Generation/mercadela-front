import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeletarCategoria from '../deletarCategoria/DeletarCategoria';
import FormularioCategoria from '../formularioCategoria/FormularioCategoria';

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                {categoria.nomeCategoria}
            </header>

            <p className='p-8 text-3xl bg-slate-200 h-full'>
                {categoria.descricaoCategoria}
            </p>

            <div className="flex">
                <Popup
                    trigger={
                        <button
                            className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                            Editar
                        </button>
                    }
                    modal
                >
                    <FormularioCategoria />
                </Popup>

                <Popup
                    trigger={
                        <button
                            className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                            Deletar
                        </button>
                    }
                    modal
                >
                    <DeletarCategoria />
                </Popup>
            </div>

        </div>
    )
}

export default CardCategorias;