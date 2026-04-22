export const ProductName = ({
  name,
  className = "",
}: {
  name?: string
  className?: string
}) => {
  return (
    <p
      className={
        "text-xs font-bold mb-2 uppercase text-primary min-h-12 " +
        className
      }
    >
      {name}
    </p>
  )
}
