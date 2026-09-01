import type { MouseEventHandler, ReactNode } from "react"
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
      className={
        className +
        "block pl-1 py-3 transition-all ease-in duration-300 w-full text-left cursor-pointer "
      }
      to={to}
    >
      {children}
    </Link>
  )
}
