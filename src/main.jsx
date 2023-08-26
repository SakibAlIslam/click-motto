import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import "flowbite";
import "./App.css";
import NotFound from "./pages/404/NotFound";

const routes = [
  {
    element: <AppLayout />,
    children: [
      {
        path: '*',
        element:<NotFound />
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
