import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/globals.css"
import { RouterProvider } from "react-router/dom"
import { Router } from "@/1_app/router"
import { Topbar } from "@/4_widgets/topbar"

const root = document.getElementById("root")

createRoot(root!).render(
  <StrictMode>
    <Topbar className="mx-auto lg:justify-between" />
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>
)
