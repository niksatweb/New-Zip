import type { ReactNode } from "react"

export const Manufacturer = ({ children }: { children: ReactNode }) => {
  return <div className="text-xl font-bold text-primary leading-tight">{children}</div>
}
