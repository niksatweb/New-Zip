import { Link } from "react-router"

export const FooterNavLink = ({
  to,
  children,
}: {
  to: string
  children: string
}) => {
  return (
    <li>
      <Link
        className="uppercase text-xs font-bold tracking-wider text-primary/50 whitespace-nowrap"
        to={to}
      >
        {children}
      </Link>
    </li>
  )
}
