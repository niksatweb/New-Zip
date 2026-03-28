import { Outlet } from "react-router"
import { Topbar } from "@/3_widgets/topbar"

export const RootLayout = () => {
  return (
    <>
      <Topbar className="mx-auto"></Topbar>
      <Outlet />
    </>
  )
}
