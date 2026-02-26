import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is the text from the router element</div>,
  },
]);

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
   <RouterProvider router={router}>
     </RouterProvider> 
  </StrictMode>,
);
