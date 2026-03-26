import type { NavbarLinkProps } from "../model/types"

export const NavbarLink = ({ children, href, className }: NavbarLinkProps) => {
  return (
    <li>
      <a
        href={href}
        className={"hover:text-secondary font-sans " + (className ?? "")}
      >
        {children}
      </a>
    </li>
  )
}
