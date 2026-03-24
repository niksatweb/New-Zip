import { createBrowserRouter } from "react-router"
import { Home } from "@/2_pages/home"

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
])
