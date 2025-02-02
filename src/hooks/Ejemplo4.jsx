/* eslint-disable no-unused-vars */
/**
 * Ejemplo para entender el uso de props.children
 */

import React from "react";

const Ejemplo4 = (props) => {
  return (
    <>
      <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
      <h2>Nombre: {props.nombre}</h2>
      {props.children}
    </>
  );
};

export default Ejemplo4;
