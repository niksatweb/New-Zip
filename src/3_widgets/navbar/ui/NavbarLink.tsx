import type { NavbarLinkProps } from "../model/types"

export const NavbarLink = ({
  isActive = false,
  children,
  href,
  className,
}: NavbarLinkProps) => {
  return (
    <li>
      <a
        href={href}
        className={
          "hover:text-secondary  " +
          (className ?? "") +
          (isActive ? "border-b-secondary" : "")
        }
      >
        {children}
      </a>
    </li>
  )
}
