export const PageTitle = ({
  className = "",
  children,
}: {
  className?: string
  children: string
}) => {
  return (
    <div
      className={
        "text-4xl font-extrabold font-headline text-primary tracking-normal mb-2 pt-4" +
        className
      }
    >
      {children}
    </div>
  )
}
