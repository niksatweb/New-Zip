import { Logo } from "@/7_shared/assets/images/Logo"
import { HamburgerButton } from "@/7_shared/ui/buttons/HamburgerButton"
import { Navbar } from "../navbar"
import { AskQuestionButton } from "@/7_shared/ui/buttons/AskQuestionButton"
import { useState } from "react"

export function Topbar() {
  const [mobMenuIsOpen, setMobMenuOpen] = useState(false);
  const handleClick = () => setMobMenuOpen(!mobMenuIsOpen)

  return (
    <div className="container mx-auto max-w-354 px-1 h-12 flex justify-between items-center">
      <Logo className="uppercase font-bold text-4xl whitespace-nowrap" />
      <div className="items-center md:justify-between gap-x-4 flex">
        <Navbar className="hidden md:flex gap-x-6 " />
        <AskQuestionButton className="bg-amber-400 hover:bg-amber-300 px-4 py-1 rounded-2xl whitespace-nowrap justify-end"></AskQuestionButton>
      </div>
      <div className="flex md:hidden" >
        <HamburgerButton onClick={handleClick} href="#" />
        <div className="absolute right-0 top-12 z-10 bg-amber-50 w-full px-1">
          {mobMenuIsOpen && <Navbar className="flex flex-col text-md md:hidden w-full text-center gap-y-4 h-40 justify-center" />}
        </div>
      </div>
    </div>
  )
}

