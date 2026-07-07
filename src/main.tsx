import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Page styles ported 1:1 from the audited static build — kept as plain CSS
// for pixel fidelity with the original Framer site. Tailwind supplies the
// token layer and utilities on top.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
