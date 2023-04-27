import React from "react";
import "./panel.css";

const Panel = ({ children, color, textTransform }) => {
  return (
    <div
      className="panel"
      style={{ backgroundColor: color, textTransform: textTransform }}
    >
      {children}
    </div>
  );
};

Panel.defaultProps = {
  color: "lightblue",
  textTransform: "uppercase",
};

export default Panel;
