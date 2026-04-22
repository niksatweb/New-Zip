import type { ReactNode } from "react"

export const Description = ({ children }: { children: ReactNode }) => {
  return <div className="leading-relaxed text-sm max-w-140">{children}</div>
}
