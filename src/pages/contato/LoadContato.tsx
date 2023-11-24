import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function LoadContato() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  function sair() {
    navigate("/contato");
  }

  useEffect(() => {
    if (usuario !== undefined) {
      sair();
    }
  }, [usuario]);

  return <div></div>;
}

export default LoadContato;
