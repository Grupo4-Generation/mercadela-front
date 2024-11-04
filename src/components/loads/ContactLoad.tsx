import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function LoadContact() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  function exit() {
    navigate("/contact");
  }

  useEffect(() => {
    if (user !== undefined) {
      exit();
    }
  }, [user]);

  return <div></div>;
}

export default LoadContact;
