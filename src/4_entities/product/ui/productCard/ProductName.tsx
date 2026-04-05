export const ProductName = ({
  name,
  className = "",
}: {
  name: string
  className?: string
}) => {
  return (
    <p
      className={
        "font-bold text-primary mb-1 leading-tight min-h-15 " + className
      }
    >
      {name}
    </p>
  )
}
