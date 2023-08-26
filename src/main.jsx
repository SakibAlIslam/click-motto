import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "flowbite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router/router.js";
import App from "./App";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
