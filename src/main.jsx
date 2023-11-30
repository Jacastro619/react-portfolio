import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter();

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
