import { useNavigate } from "react-router-dom";
import { useEffect,useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";

function LoadProduto() {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext)

    function sair(){
        navigate('/products');
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

export default LoadProduto;