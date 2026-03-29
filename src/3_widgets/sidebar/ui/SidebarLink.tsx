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
      className={
        "hover:bg-primary/10 block py-3 transition-all ease-in duration-300 " +
        className
      }
    >
      {children}
    </NavLink>
  )
}
