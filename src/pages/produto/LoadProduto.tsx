import { useNavigate } from "react-router-dom";
import { useEffect,useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";

function LoadProduto() {

    const navigate = useNavigate();
    const { usuario } = useContext(AuthContext)

    function sair(){
        navigate('/produtos');
    }

    useEffect(() => {

        if (usuario !== undefined) {
            sair()
        }
    }, [usuario])

  return (
    <div>ModalSair</div>
  )
}

export default LoadProduto;