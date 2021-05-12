import { StrictMode } from "react";
import { hydrate } from "react-dom";
import "./index.css";
import App from "./App";

hydrate(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root"),
);
