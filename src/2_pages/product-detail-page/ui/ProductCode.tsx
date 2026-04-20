import type { ReactNode } from "react"

export const ProductCode = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-xs bg-primary/20 px-3 py-1 w-auto uppercase mr-auto">
      Артикул: <span className="font-bold">{children}</span>
    </p>
  )
}
