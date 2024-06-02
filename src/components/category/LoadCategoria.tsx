import { useNavigate } from "react-router-dom";
import { useEffect,useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";

function LoadCategoria() {

    const navigate = useNavigate();
    const { usuario } = useContext(AuthContext)

    function sair(){
        navigate('/categoria');
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

export default LoadCategoria;