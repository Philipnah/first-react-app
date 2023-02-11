import React, { StrictMode } from "react"; // gets react!
import { createRoot } from "react-dom/client"; // react-dom lets react talk to browsers
import "./styles.css"; // gets the style for the app

import App from "./App"; // gets the app-component

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);