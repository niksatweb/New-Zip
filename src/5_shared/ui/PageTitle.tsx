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
        "text-4xl font-extrabold font-headline text-primary tracking-normal mb-2" +
        className
      }
    >
      {children}
    </div>
  )
}
