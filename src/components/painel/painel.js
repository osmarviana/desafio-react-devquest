import React from "react";
import "./painel.css";

const Painel = ({ children, color, textTransform }) => {
  return (
    <div
      className="painel"
      style={{ backgroundColor: color, textTransform: textTransform }}
    >
      {children}
    </div>
  );
};

Painel.defaultProps = {
  color: "lightblue",
  textTransform: "uppercase",
};

export default Painel;
