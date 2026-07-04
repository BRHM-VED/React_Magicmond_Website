import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Page styles ported 1:1 from the audited static build — kept as plain CSS
// for pixel fidelity with the original Framer site. Tailwind supplies the
// token layer and utilities on top.
import "./utils/styles/base.css";
import "./utils/styles/home.css";
import "./utils/styles/infraedge.css";
import "./utils/styles/sports.css";
import "./utils/styles/consultation.css";
import "./utils/styles/case-study.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
