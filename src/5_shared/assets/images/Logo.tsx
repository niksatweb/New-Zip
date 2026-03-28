export const Logo = ({
  className = "",
  href = "#",
}: {
  className?: string
  href?: string
}) => {
  return (
    <a
      href={href}
      className={
        "flex items-center gap-x-1 uppercase font-bold whitespace-nowrap " +
        className
      }
    >
      <span className="leading-none">New-Zip</span>
    </a>
  )
}
