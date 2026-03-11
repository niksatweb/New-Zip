import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router/dom"
import { Router } from "@/app/router.ts"
import { Topbar } from "./widgets/topbar"

const root = document.getElementById("root")

createRoot(root!).render(
  <StrictMode>
    <Topbar />
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>
)
