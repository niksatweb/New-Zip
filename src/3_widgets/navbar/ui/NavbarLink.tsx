import { NavLink } from "react-router"
import type { NavbarLinkProps } from "../model/types"

export const NavbarLink = ({ children, to, className }: NavbarLinkProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => {
          return isActive
            ? "border-b-3 border-b-secondary text-secondary hover:text-secondary font-sans "
            : "hover:text-secondary font-sans "
        }}
      >
        {children}
      </NavLink>
    </li>
  )
}
