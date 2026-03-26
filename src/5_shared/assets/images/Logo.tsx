export const Logo = ({
  className,
  href = "#",
}: {
  className: string
  href?: string
}) => {
  return (
    <a href={href} className="flex items-center  gap-x-1">
      <span className={`${className} leading-none`}>New-Zip</span>
    </a>
  )
}
