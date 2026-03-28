import { NavbarLink } from "./NavbarLink"

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <ul className={className}>
      <NavbarLink className="" to="/">
        Главная
      </NavbarLink>
      <NavbarLink to="about">О компании</NavbarLink>
      <NavbarLink to="shipping">Доставка</NavbarLink>
      <NavbarLink to="contacts">Контакты</NavbarLink>
    </ul>
  )
}
