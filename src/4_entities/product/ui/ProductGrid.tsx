import type { ReactNode } from "react"

export const ProductGrid = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={"grid lg:grid-cols-4 gap-x-6 gap-y-12 " + className}>
      {children}
    </div>
  )
}
