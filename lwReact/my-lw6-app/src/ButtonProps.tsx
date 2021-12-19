import React, { useState } from "react";

interface ButtonProps {
  text: string;
  onClick: (event: any) => any; // TODO: Что это за пропс?
}

var Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
export default Button;
