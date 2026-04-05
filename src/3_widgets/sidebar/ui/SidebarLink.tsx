import type { ReactNode } from "react"
import { Link } from "react-router"

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
    <Link
      to={to}
      className={
        className +
        "hover:bg-primary/10 block pl-1 py-3 transition-all ease-in duration-300 "
      }
    >
      {children}
    </Link>
  )
}
