import { createBrowserRouter } from "react-router"
import { Home } from "@/2_pages/home"
import { About } from "@/2_pages/about/About"
import { Shipping } from "@/2_pages/shipping/Shipping"
import { Contacts } from "@/2_pages/contacts/Contacts"
import { RootLayout } from "./layout/RootLayout"
import { PrivacyPolicy } from "@/2_pages/privacy-policy"
import { Payments } from "@/2_pages/payments/Payments"
import { Returns } from "@/2_pages/returns"
import { Support } from "@/2_pages/support"
import { ProductDetailPage } from "@/2_pages/product-detail-page/ProductDetailPage"

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
      {
        path: "privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "payments",
        Component: Payments,
      },
      {
        path: "returns",
        Component: Returns,
      },
      {
        path: "support",
        Component: Support,
      },
      {
        path: ":id",
        Component: ProductDetailPage,
      },
    ],
  },
])
