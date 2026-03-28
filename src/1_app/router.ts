import { createBrowserRouter } from "react-router"
import { Home } from "@/2_pages/home"
import { About } from "@/2_pages/about/About"
import { Shipping } from "@/2_pages/shipping/Shipping"
import { Contacts } from "@/2_pages/contacts/Contacts"
import { RootLayout } from "./layout/RootLayout"

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "about",
        Component: About,
      },
      {
        path: "shipping",
        Component: Shipping,
      },
      {
        path: "contacts",
        Component: Contacts,
      },
    ],
  },
])
