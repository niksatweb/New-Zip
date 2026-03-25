import { NavbarLink } from "./NavbarLink"

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <ul className={className}>
      <NavbarLink className="active" href="#">
        Главная
      </NavbarLink>
      <NavbarLink isActive href="#">
        О компании
      </NavbarLink>
      <NavbarLink href="#">Доставка</NavbarLink>
      <NavbarLink href="#">Контакты</NavbarLink>
    </ul>
  )
}
