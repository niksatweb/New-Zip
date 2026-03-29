import type { ReactNode } from "react"
import { NavLink } from "react-router"

export const SidebarLink = ({
  className = "",
  children,
  to,
}: {
  className?: string
  children: ReactNode
  to: string
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return isActive
          ? "bg-primary block pl-1 py-3 text-primary-content rounded-r-lg"
          : "hover:bg-primary/10 block pl-1 py-3 transition-all ease-in duration-300"
      }}
    >
      {children}
    </NavLink>
  )
}
