/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
// import TaskListComponent from "./components/container/task_list";
// import Ejemplo1 from "./hooks/Ejemplo1";
// import Ejemplo2 from "./hooks/Ejemplo2";
// import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
  return (
    <>
      {/* <TaskListComponent /> */}
      {/* <Ejemplo1 /> */}
      {/* <Ejemplo2 /> */}
      {/* <MiComponenteConContexto /> */}
      <Ejemplo4 nombre="Antonio">
        {/* Todo lo que hay acá es tratado como children */}
        <h3>Contenido de prop.children</h3>
      </Ejemplo4>
    </>
  );
}

export default App;
