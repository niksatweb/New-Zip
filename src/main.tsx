import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import {Router} from './app/Router.ts'

<<<<<<< Updated upstream
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is the text from the router element</div>,
  },
]);
=======
>>>>>>> Stashed changes

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
<<<<<<< Updated upstream
   <RouterProvider router={router}>
     </RouterProvider> 
=======
    <RouterProvider router={Router}>
    </RouterProvider>
>>>>>>> Stashed changes
  </StrictMode>,
);
