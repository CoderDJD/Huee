import { StrictMode } from "react";
import { hydrate } from "react-dom";
import App from "./App";
import "./index.css";
hydrate(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root"),
);
