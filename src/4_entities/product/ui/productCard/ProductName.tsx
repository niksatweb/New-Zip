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
        "font-bold text-primary mb-3 leading-tight min-h-10 " + className
      }
    >
      {name}
    </p>
  )
}
