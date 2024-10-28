/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import "./App.scss";
import { useEffect, useState } from "react";
import MenuSideBar from "./components/Menu/MenuSideBar";

function App() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.length === 0) {
      setIsLogged(false);
      navigate("/");
    }

    if (localStorage.length > 0) {
      setIsLogged(true);
      navigate("/home");
    }
  }, [isLogged]);

  return <MenuSideBar />;
}

export default App;
