import type { ReactNode } from "react"

export const NavbarLink = ({ children, href, className }: { children: ReactNode, href: string, className?: string }) => {
  return (
    <li><a href={href} className={`hover:text-[#1e3a8a] font-medium ${className}`}>{children}</a></li>
  )
}