import { useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import "./App.scss";
import Footer from "./components/footer/Footer";
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
  return (
    <>
      <Header />
      <MenuSideBar />
      <Footer />
    </>
  );
}

export default App;
