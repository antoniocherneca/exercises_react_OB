/* eslint-disable no-unused-vars */
/**
 * Ejemplo del uso del método de ComponentDidUpdate en componente clase
 * y el hook de ciclo de vida en componente funcional
 */
import React, { Component, useEffect } from "react";

export class DidMount extends Component {
  componentDidUpdate() {
    console.log(
      "Comportamiento cuando un componente recibe nuevos props o cambio en su estado privado"
    );
  }

  render() {
    return <div>DidUpdate</div>;
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      "Comportamiento antes de que el componente sea añadido al DOM (renderice)"
    );
  });

  return <div>DidUpdate</div>;
};
