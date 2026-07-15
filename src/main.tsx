import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
// Page styles ported 1:1 from the audited static build — kept as plain CSS
// for pixel fidelity with the original Framer site. Tailwind supplies the
// token layer and utilities on top.

const container = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If the container already has child nodes (prerendered HTML injected at build
// time), hydrate so React re-uses the existing DOM instead of wiping it.
// In local dev (no prerendering) the container is empty, so we fall back to
// createRoot for a normal client-only render.
if (container.childElementCount > 0) {
  ReactDOM.hydrateRoot(container, app);
} else {
  ReactDOM.createRoot(container).render(app);
}

