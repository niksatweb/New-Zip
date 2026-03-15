export const ButtonIconText = ({children, className}: {children: string, className?: string}) => {
  return (
    <span className={`${className} hidden xl:block`}>{children}</span>
  )
}
export default ButtonIconText