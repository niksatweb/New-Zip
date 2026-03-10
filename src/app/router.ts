import { createBrowserRouter } from "react-router"
import { Home } from "@/pages/home"

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
])
