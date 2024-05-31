import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-alice-carousel/lib/alice-carousel.css";
import { CryptoProvider } from "./CryptoContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CryptoProvider>
      <App />
    </CryptoProvider>
  </React.StrictMode>
);
