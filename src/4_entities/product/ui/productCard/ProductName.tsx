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
        "text-xs font-bold mb-2 uppercase text-primary " +
        className
      }
    >
      {name}
    </p>
  )
}
