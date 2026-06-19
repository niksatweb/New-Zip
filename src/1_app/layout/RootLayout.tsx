import { Outlet } from "react-router"
import { Topbar } from "@/3_widgets/topbar"
import { Footer } from "@/3_widgets/footer"

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen gap-y-4">
      <Topbar className="mx-auto"></Topbar>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer className="mx-auto"></Footer>
    </div>
  )
}
