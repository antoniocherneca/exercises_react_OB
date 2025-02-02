/* eslint-disable no-unused-vars */
/**
 * uso del useState()
 */
import React, { useState } from "react";

function Ejemplo1() {
  const valorInicial = 0;
  const personaInicial = {
    nombre: "Antu",
    email: "amail@correo.com",
  };

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const actualizarPersona = () => {
    setPersona({
      nombre: "Pepe",
      email: "pepe@correo.com",
    });
  };

  return (
    <>
      <h1>*** Ejemplo de Use State ***</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>DATOS DE LA PERSONA:</h2>
      <h3>NOMBRE: {persona.nombre}</h3>
      <h3>EMAIL: {persona.email}</h3>
      <button onClick={incrementarContador}>Aumentar contador</button>
      <button onClick={actualizarPersona}>Actualizar persona</button>
    </>
  );
}

export default Ejemplo1;
