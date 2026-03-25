import { Logo } from "@/5_shared/assets/images/Logo"
import { Navbar } from "../../navbar"
import { useState } from "react"
import { Container } from "@/5_shared/ui"
import { Searchbar } from "@/3_widgets/searchbar"
import { BasketButton } from "@/5_shared/ui"
import { FavoritesButton } from "@/5_shared/ui"

export function Topbar({ className }: { className: string }) {
  const [mobMenuIsOpen, setMobMenuOpen] = useState(false)
  const handleClick = () => setMobMenuOpen(!mobMenuIsOpen)

  return (
    <Container className={"h-16 lg:flex gap-x-8 " + (className ?? "")}>
      <Logo className="uppercase font-bold text-3xl whitespace-nowrap" />
      <Navbar className="hidden md:flex gap-x-4" />
      <Searchbar
        placeholder="Поиск по артикулу или названию компонента..."
        className="flex-1 mx-8"
      ></Searchbar>
      <div className="flex md:hidden">
        <div className="absolute right-0 top-12 z-10 bg-primary-content w-full px-1">
          {mobMenuIsOpen && (
            <Navbar className="flex flex-col text-md md:hidden w-full text-center gap-y-4 h-40 justify-center" />
          )}
        </div>
      </div>
      <div className="actions flex gap-x-4">
        <FavoritesButton />
        <BasketButton />
      </div>
    </Container>
  )
}
