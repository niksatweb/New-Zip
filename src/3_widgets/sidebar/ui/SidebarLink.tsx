import type { MouseEventHandler, ReactNode } from "react"

export const SidebarLink = ({
  className = "",
  children,
  onClick,
}: {
  className?: string
  children: ReactNode
  onClick: MouseEventHandler
}) => {
  return (
    <button
      onClick={onClick}
      className={
        className +
        "block pl-1 py-3 transition-all ease-in duration-300 w-full text-left cursor-pointer "
      }
    >
      {children}
    </button>
  )
}
