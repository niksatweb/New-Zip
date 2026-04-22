import type { ReactNode } from "react"

export const Name = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-4xl font-headline font-extrabold text-primary leading-tight">
      {children}
    </div>
  )
}
