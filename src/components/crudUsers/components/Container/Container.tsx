import React from "react";
import "./Container.scss";

type PROPS = {
  children: React.ReactNode;
};

const Container = ({ children }: PROPS) => {
  return <div className="container">{children}</div>;
};

export default Container;
