import { Logo } from "@/7_shared/assets/images/Logo"
import { HamburgerButton } from "@/7_shared/ui/buttons/HamburgerButton"
import { Navbar } from "../../navbar"
import { AskQuestionButton } from "@/7_shared/ui/buttons/AskQuestionButton"
import { useState } from "react"
import { Container } from "@/7_shared/ui"
import { SearchInput } from "@/5_features/search"

export function Topbar({ className }: { className: string }) {
  const [mobMenuIsOpen, setMobMenuOpen] = useState(false)
  const handleClick = () => setMobMenuOpen(!mobMenuIsOpen)

  return (
    <Container
      className={"self-end h-12 lg:flex lg:gap-x-10 " + (className ?? "")}
    >
      <Logo className="uppercase font-bold text-4xl whitespace-nowrap" />
      <SearchInput className="flex lg:flex-1 justify-end md:mx-0 ml-auto"></SearchInput>
      <div className="items-center md:justify-between gap-x-4 flex justify-end">
        <Navbar className="hidden md:flex gap-x-6 " />
        <AskQuestionButton className="bg-accent hover:bg-accent/80 px-4 py-1 rounded-2xl whitespace-nowrap justify-end"></AskQuestionButton>
      </div>
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
