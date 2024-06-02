import { useNavigate } from "react-router-dom";
import { useEffect,useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";

function CategoryLoad() {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext)

    function sair(){
        navigate('/category');
    }

    useEffect(() => {

        if (user !== undefined) {
            sair()
        }
    }, [user])

  return (
    <div>ModalSair</div>
  )
}

export default CategoryLoad;