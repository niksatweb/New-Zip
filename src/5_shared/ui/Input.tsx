export const Input = ({
  className,
  placeholder,
  type,
  name,
}: {
  className?: string
  placeholder?: string
  type: string
  name: string
}) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      className={"input focus:outline-none " + (className ?? "")}
    />
  )
}
