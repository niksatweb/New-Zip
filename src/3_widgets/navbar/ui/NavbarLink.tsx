import { NavLink } from "react-router"
import type { NavbarLinkProps } from "../model/types"

export const NavbarLink = ({ children, to, className }: NavbarLinkProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => {
          return isActive
            ? "border-b-2 border-b-secondary text-secondary font-bold text-sm pb-1 "
            : "hover:text-secondary font-bold text-sm "
        }}
      >
        {children}
      </NavLink>
    </li>
  )
}
