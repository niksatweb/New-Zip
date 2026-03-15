import { Logo } from "@/7_shared/assets/images/Logo"
import { HamburgerButton } from "@/7_shared/ui/button/HamburgerButton"
import { Navbar } from "../navbar"
import { AskQuestionButton } from "@/7_shared/ui/button/AskQuestionButton"

export function Topbar() {
  return <div className="container mx-auto max-w-354 px-1 h-12 flex justify-between items-center">
    <Logo className="uppercase font-bold text-4xl whitespace-nowrap" />
    <div className="items-center justify-between gap-x-4 hidden md:flex">
      <Navbar className="hidden md:flex gap-x-6 " />
      <AskQuestionButton className="bg-amber-400 hover:bg-amber-300 px-4 py-1 rounded-2xl whitespace-nowrap"></AskQuestionButton>
    </div>
    <div className="flex md:hidden" >
      <HamburgerButton href="#" />
    </div>


  </div>
}
