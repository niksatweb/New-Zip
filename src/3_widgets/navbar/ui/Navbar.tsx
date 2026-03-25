import { NavbarLink } from "./NavbarLink"

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <ul className={className}>
      <NavbarLink
        className="border-b-3 border-b-secondary text-secondary"
        href="#"
      >
        Главная
      </NavbarLink>
      <NavbarLink href="#">О компании</NavbarLink>
      <NavbarLink href="#">Доставка</NavbarLink>
      <NavbarLink href="#">Контакты</NavbarLink>
    </ul>
  )
}
