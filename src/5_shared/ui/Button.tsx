import type { ReactNode } from "react"

export const Button = ({
  children,
  href = "#",
  badge,
  className = "",
  onClick,
}: {
  children: ReactNode
  href?: string
  badge?: number
  className?: string
  onClick: React.MouseEventHandler
}) => {
  return (
    <div onClick={onClick} className={className}>
      <div
        className={
          "relative hover:text-secondary transition-all duration-300 ease-out "
        }
      >
        {children}
        {badge && (
          <span
            className={
              "absolute -top-2 -right-2 flex items-center justify-center h-4.5 min-w-4.5 px-1 bg-secondary text-white text-xs font-bold rounded-full"
            }
          >
            {badge > 99 ? 99 : badge}
          </span>
        )}
      </div>
    </div>
  )
}
