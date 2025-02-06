/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// Definiendo estilos en constantes

// Estilos para usuarios logueados
const loggedStyle = {
  color: "blue",
};

// Estilos para usuarios no logueados
const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyled = (props) => {
  /**
   * Generamos un estado para el componente y así conrolar si el usuario
   * está logueado o no.
   */
  const [logged, setLogged] = useState(false);
  const greetingUser = () => <p>Hola {props.name}</p>;
  const pleaseLogin = () => <p>Please login</p>;

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUser() : pleaseLogin()}

      <button
        onClick={() => {
          console.log("Botón pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
