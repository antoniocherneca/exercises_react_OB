/* eslint-disable no-unused-vars */
/**
 * Uso del useState() y del useRef()
 */

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Con useRef asociamos una variable con un elemento del DOM del componente
  const miRef = useRef();

  const incrementar1 = () => {
    setContador1(contador1 + 1);
  };

  const incrementar2 = () => {
    setContador2(contador2 + 1);
  };

  /**
   * USEEFFECT:
   * Caso 1: lo utilizamos para ejecutar una porción de código
   * cada vez que haya un cambio de estado
   */
  // useEffect(() => {
  //   console.log("Cambio en el estado del componente");
  //   console.log("Mostrando referencia a elemento del DOM");
  //   console.log(miRef);
  // });

  /**
   * USEEFFECT:
   * Caso 2: ejecutaremos el useEffect cuando se actualice el
   * valor de contador1 SOLAMENTE
   */
  useEffect(() => {
    console.log("Cambio en el estado del componente");
    console.log("Mostrando referencia a elemento del DOM");
    console.log(miRef);
  }, [contador1]);

  return (
    <>
      <h1>*** Ejemplo useState, useRef y useEffect ***</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 2: {contador2}</h2>
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <button onClick={incrementar1}>Incrementar contador1</button>
      <button onClick={incrementar2}>Incrementar contador2</button>
    </>
  );
};

export default Ejemplo2;
