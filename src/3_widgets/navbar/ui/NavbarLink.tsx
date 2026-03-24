import type { NavbarLinkProps } from "../model/types"

export const NavbarLink = ({ children, href, className }: NavbarLinkProps) => {
  return (
    <li>
      <a href={href} className={"hover:text-secondary font-medium" + className}>
        {children}
      </a>
    </li>
  )
}
