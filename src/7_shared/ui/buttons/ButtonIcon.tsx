import type { ReactNode } from "react"

export const ButtonIcon = ({
  className,
  title,
  href,
  children,
}: {
  className?: string
  title?: string
  href: string
  children?: ReactNode
}) => {
  return (
    <a title={title} href={href} className={className ?? ""}>
      {children}
    </a>
  )
}
