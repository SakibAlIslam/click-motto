import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import "flowbite";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/search",
    element: <SearchPage />
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
