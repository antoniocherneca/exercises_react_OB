/* eslint-disable no-unused-vars */
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Añado bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Los estilos propios deben ir debajo de los estilos de bootstrap
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
