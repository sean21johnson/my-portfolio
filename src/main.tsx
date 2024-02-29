import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ThemeModeProvider from "./providers/ThemeModeProvider";

import "./index.css";
import "./themes/theme.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
