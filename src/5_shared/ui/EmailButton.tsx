export const EmailButton = ({
  className = "",
  children,
  mailto,
}: {
  className?: string
  children: string
  mailto: string
}) => {
  return (
    <a className={className} href={`mailto:${mailto}`}>
      {children}
    </a>
  )
}
