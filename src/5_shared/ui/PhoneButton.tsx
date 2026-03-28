export const PhoneButton = ({
  className = "",
  children,
  tel,
}: {
  className?: string
  children: string
  tel: string
}) => {
  return (
    <a className={"" + className} href={`tel:${tel}`}>
      {children}
    </a>
  )
}
