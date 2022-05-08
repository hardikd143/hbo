import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AppProvider, useGlobalContext } from "./context";
import { ResourceProvider } from "./resContext";
// const {darkTheme}= useGlobalContext()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <ResourceProvider>
        <App />
      </ResourceProvider>
    </AppProvider>
  </React.StrictMode>
);
