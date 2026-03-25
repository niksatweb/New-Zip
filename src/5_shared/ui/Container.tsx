import type { ReactNode } from "react"

export const Container = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={
        "container max-w-358 px-4 flex items-center " + (className ?? "")
      }
    >
      {children}
    </div>
  )
}
