import type { ReactNode } from "react"

export interface NavbarLinkProps {
  children: ReactNode
  href: string
  className?: string
  isActive?: boolean
}
