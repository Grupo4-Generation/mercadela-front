import { ArrowCircleDown } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

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
        <div className=''>
            <div className='flex'>
                <p>{categoria.nomeCategoria}</p>
                <ArrowCircleDown size={18} />
            </div>

            <div className="flex">
                
                <Popup
                    trigger={
                        <button 
                            className='border rounded px-2 py-2 hover:bg-white hover:text-indigo-800'>
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
                            className='border rounded px-2 py-2 hover:bg-white hover:text-indigo-800'>
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