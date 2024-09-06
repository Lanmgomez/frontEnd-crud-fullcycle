import "./Header.scss";
import { Button } from "antd";
import Modals from "./Modal/Modals";
import { useState } from "react";

const Header = () => {
  const username = localStorage.getItem("username");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const renderHeader = () => {
    if (localStorage.length === 0) {
      return <p className="header-text">Bem vindo, visitante!</p>;
    }

    if (localStorage.length > 0) {
      return (
        <>
          <p className="header-text">
            Bem vindo, {username}
            <Button onClick={() => setIsModalOpen(true)}>Sair</Button>
          </p>
        </>
      );
    }
  };

  return (
    <header className="header">
      {renderHeader()}

      <Modals
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Tem certeza que deseja sair?"
        content="Ao clicar em confirmar, sua sessão atual será encerrada."
      />
    </header>
  );
};

export default Header;
