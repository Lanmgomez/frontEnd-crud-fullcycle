import { Menu, MenuProps } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

import "./MenuSideBar.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";

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
