import type { ReactNode } from "react"

export const CartSummary = ({
  className = "",
  children,
}: {
  className: string
  children: ReactNode
}) => {
  return <div className={className}>{children}</div>
}
