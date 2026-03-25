import type { ReactNode } from "react"

export const Button = ({
  children,
  href = "#",
}: {
  children: ReactNode
  href?: string
}) => {
  return <a href={href}>{children}</a>
}
