import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
// Page styles ported 1:1 from the audited static build — kept as plain CSS
// for pixel fidelity with the original Framer site. Tailwind supplies the
// token layer and utilities on top.

// Always use createRoot — fast client render without hydration overhead.
// The prerendered HTML in #root serves SEO crawlers; React renders fresh
// on top for real users (no expensive DOM-traversal hydration pass).
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

