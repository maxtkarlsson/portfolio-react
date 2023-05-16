import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
//import { RouterProvider } from "react-router";
//import { router } from "./Router";
import { App } from "./App";
// import { Error } from "./pages/Error";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
