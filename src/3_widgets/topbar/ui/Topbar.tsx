import { Logo } from "@/5_shared/assets/images/Logo"
import { HamburgerButton } from "@/5_shared/ui/buttons/HamburgerButton"
import { Navbar } from "../../navbar"
import { useState } from "react"
import { Container } from "@/5_shared/ui"

export function Topbar({ className }: { className: string }) {
  const [mobMenuIsOpen, setMobMenuOpen] = useState(false)
  const handleClick = () => setMobMenuOpen(!mobMenuIsOpen)

  return (
    <Container className={"h-12 lg:flex gap-x-8 " + (className ?? "")}>
      <Logo className="uppercase font-bold text-3xl whitespace-nowrap" />
      <Navbar className="hidden md:flex gap-x-4 mr-auto" />
      <div className="flex md:hidden">
        <HamburgerButton onClick={handleClick} href="#" className="relative" />
        <div className="absolute right-0 top-12 z-10 bg-primary-content w-full px-1">
          {mobMenuIsOpen && (
            <Navbar className="flex flex-col text-md md:hidden w-full text-center gap-y-4 h-40 justify-center" />
          )}
        </div>
      </div>
    </Container>
  )
}
