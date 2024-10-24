import { Menu, MenuProps } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./MenuSideBar.scss";

type MenuItem = Required<MenuProps>["items"][number];
const MenuSideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const menuLabels: MenuItem[] = [
    {
      key: "1",
      label: "Home",
      type: "item",
      icon: <i className="bi bi-house-door" />,
      className: "menu-items",
      onClick: () => navigate("/home"),
    },
    {
      key: "2",
      label: "Pagamentos",
      type: "item",
      icon: <i className="bi bi-currency-dollar" />,
      className: "menu-items",
      onClick: () => navigate("/users/payments"),
    },
    {
      key: "3",
      label: "Logs",
      type: "item",
      icon: <i className="bi bi-clock-history" />,
      className: "menu-items",
      onClick: () => navigate("/users/logs"),
    },
    {
      key: "4",
      label: "Configurações",
      type: "item",
      icon: <i className="bi bi-house-door" />,
      className: "menu-items",
      onClick: () => navigate("/settings"),
    },
    {
      key: "5",
      label: "Sair",
      type: "item",
      icon: <i className="bi bi-arrow-counterclockwise" />,
      className: "menu-items",
      onClick: () => handleLogout(),
    },
    // TODO - Apagar após testar todo o fluxo
    // {
    //   key: "10",
    //   label: "Teste",
    //   type: "item",
    //   icon: <i className="bi bi-arrow-counterclockwise" />,
    //   className: "menu-items",
    //   onClick: () => navigate("/users/successul-payment"),
    // },
  ];

  if (localStorage.length === 0) {
    return <Outlet />;
  }

  if (localStorage.length > 0) {
    return (
      <>
        <Header />

        <div className="menu-side-bar-component">
          <Menu items={menuLabels}></Menu>
          <Outlet />
        </div>

        <Footer />
      </>
    );
  }
};

export default MenuSideBar;
