import React from "react";
import "./button.css";

const msgAlert = (props) => {
  alert(`A label desse botão é "${props.target.innerHTML}"`);
};

const Button = (props) => {
  return (
    <button className="btn" onClick={msgAlert}>
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  label: "Alert",
};

export default Button;
