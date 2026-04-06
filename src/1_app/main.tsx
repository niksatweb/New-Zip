import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/globals.css"
import { RouterProvider } from "react-router/dom"
import { Router } from "@/1_app/router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const root = document.getElementById("root")
const queryClient = new QueryClient()

createRoot(root!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router}></RouterProvider>
    </QueryClientProvider>
  </StrictMode>
)
