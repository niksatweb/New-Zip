export const Input = ({
  className,
  placeholder,
  type,
}: {
  className?: string
  placeholder?: string
  type: string
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={"input focus:outline-none " + (className ?? "")}
    />
  )
}
