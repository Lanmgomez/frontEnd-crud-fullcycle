import "./Header.scss";
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
          <div className="header-text">
            <p>Bem vindo, {username}! 🚀✌️</p>

            <div>
              <i className="bi bi-badge-8k" />
              <i className="bi bi-badge-hd" />
            </div>
          </div>
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
