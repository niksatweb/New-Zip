import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/globals.css"
import { RouterProvider } from "react-router/dom"
import { Router } from "@/1_app/router"

const root = document.getElementById("root")

createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>
)
