import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./App";
// import { Error } from "./pages/Error";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
