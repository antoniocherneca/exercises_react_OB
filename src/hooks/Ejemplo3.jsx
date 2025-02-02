/**
 * Uso del useState() y del useContext()
 */
import React, { useState, useContext } from "react";

const miContexto = React.createContext(null);
/**
 *
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */
const Componente1 = () => {
  const state = useContext(miContexto);

  return (
    <>
      <h1>El token es: {state.token}</h1>
      <Componente2 />
    </>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <>
      <h2>La sesión es: {state.sesion}</h2>
    </>
  );
};

const MiComponenteConContexto = () => {
  const estadoInicial = {
    token: "123456",
    sesion: 1,
  };

  // Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  const actualizarSesion = () => {
    setSessionData({
      token: "JWT123456789",
      sesion: sessionData.sesion + 1,
    });
  };

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que esté acá dentro puede leer los datos de sessionData */}
      {/* Además si se actualiza, los componentes de acá también lo actualizan */}
      <h1>*** Ejemplo de useState y useContext ***</h1>
      <Componente1 />
      <button onClick={actualizarSesion}>Actualizar Sesión</button>
    </miContexto.Provider>
  );
};

export default MiComponenteConContexto;
