/* eslint-disable no-unused-vars */
/**
 * Ejemplo del uso del método ComponentWillUnmount para componente clase
 * y el hook para componente funcional (cuando el componente va a desaparecer)
 */
import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente desaparezca");
  }

  render() {
    return <div>DidWillUnmount</div>;
  }
}

export const DidWillUnmountHook = () => {
  useEffect(() => {
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca");
    };
  }, []);

  return <div>DidMount</div>;
};
