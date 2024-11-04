import { ArrowCircleDown } from '@phosphor-icons/react';

import category from '../../../models/Category'

import "./CategoryCard.css"
import { Link } from 'react-router-dom';
import ModalDelete from '../modal/ModalDelete';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

interface CategoryCardProps {
    category: category
}

function CategoryCard({ category }: CategoryCardProps) {
    
    const {user} = useContext(AuthContext)

    return (
        <div className='flex h-[20vh] justify-center'>
            <p className='flex text-3xl text-[#C24730] font-bold'>{category.name}</p>
            
            {user.admin? (<div id='dropCat'>
                
                <button>
                    <ArrowCircleDown size={26} weight="bold" className='dropIcon' />
                </button>
                <div className='dropFilha'>
                    <Link to={`/editCategory/${category.id}`}>
                        <button className='editar'>Editar</button>
                    </Link>

                    <ModalDelete id={category.id}/>
                </div>
            </div>) : null}
        </div>
    )
}

export default CategoryCard;