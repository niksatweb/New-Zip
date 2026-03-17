import { NavbarLink } from "./ui/NavbarLink"

export const Navbar = ({ className }: { className?: string }) => {
  return (

    <ul className={className}>
      <NavbarLink href="#">Главная</NavbarLink>
      <NavbarLink href="#">Каталог</NavbarLink>
      <NavbarLink href="#">Контакты</NavbarLink>
    </ul>

  )
}
