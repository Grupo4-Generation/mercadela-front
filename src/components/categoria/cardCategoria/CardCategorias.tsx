import { ArrowCircleDown } from '@phosphor-icons/react';

import Categoria from '../../../models/Categoria'

import "./CardCategoria.css"
import { Link } from 'react-router-dom';


interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (

        <div className='flex h-[20vh] justify-center'>
            <p className='flex text-3xl text-[#C24730] font-bold'>{categoria.nomeCategoria}</p>
            <div id='dropCat'>
                <button>
                    <ArrowCircleDown size={26} weight="bold" className='dropIcon' />
                </button>
                <div className='dropFilha'>
                    <Link to={`/editarCategoria/${categoria.id}`}>
                        <button className='editar'>Editar</button>
                    </Link>

                    <Link to={`/deletarCategoria/${categoria.id}`}>
                        <button className='deletar'>Deletar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardCategorias;