import react, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
