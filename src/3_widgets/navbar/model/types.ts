import type { ReactNode } from "react"

export interface NavbarLinkProps {
  children: ReactNode
  to: string
  className?: string
  isActive?: boolean
}
