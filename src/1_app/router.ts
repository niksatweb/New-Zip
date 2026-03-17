import { createBrowserRouter } from "react-router"
import { Home } from "@/3_pages/home"

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
])
