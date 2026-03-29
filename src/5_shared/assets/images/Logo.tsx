import { Link } from "react-router"


export const Logo = ({
  className = "",
  to = "/",
}: {
  className?: string
  to?: string
}) => {
  return (
    <Link to={to}
      className={
        "flex items-center gap-x-1 uppercase font-bold whitespace-nowrap " +
        className
      }
    >
      <span className="leading-none">New-Zip</span>
    </Link>
  )
}
