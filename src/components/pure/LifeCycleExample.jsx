/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("componente instanciado");
  }

  componentWillMount() {
    console.log("Antes de pintar el componente");
  }

  componentDidMount() {
    console.log("El componente está listo pero todavía no ha sido pintado");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Si va a recibir nuevas props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Controlar si el componente debe actualizarse o no
    // Debe devolver true || false
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Justo antes de actualizar el componente");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Se actualizó el componente");
  }

  componentWillUnmount() {
    console.log("Justo antes de desmontar el componente");
  }

  render() {
    return <div></div>;
  }
}

LifeCycleExample.propTypes = {};

export default LifeCycleExample;
