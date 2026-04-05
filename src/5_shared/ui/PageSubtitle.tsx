export const PageSubtitle = ({
  className = "",
  children,
}: {
  className?: string
  children: string
}) => {
  return (
    <div className={"text-on-surface-variant max-w-xl" + className}>
      {children}
    </div>
  )
}
