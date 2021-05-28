import { StrictMode } from "react";
import { hydrate } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

hydrate(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.querySelector("#root"),
);
