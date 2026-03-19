<<<<<<< HEAD
<<<<<<< HEAD
import { Logo } from "@/7_shared/assets/images/Logo"
import { HamburgerButton } from "@/7_shared/ui/buttons/HamburgerButton"
import { Navbar } from "../../navbar"
import { AskQuestionButton } from "@/7_shared/ui/buttons/AskQuestionButton"
import { useState } from "react"
import { SearchInput } from "@/5_features/search"
=======
=======
>>>>>>> 56fae87 (15-add-hero: WIP)
import { Logo } from "@/7_shared/assets/images/Logo";
import { HamburgerButton } from "@/7_shared/ui/buttons/HamburgerButton";
import { Navbar } from "../../navbar";
import { AskQuestionButton } from "@/7_shared/ui/buttons/AskQuestionButton";
import { useState } from "react";
import { Container } from "@/7_shared/ui";
<<<<<<< HEAD
>>>>>>> 0761c4e (15-add-hero: WIP)
=======
>>>>>>> 56fae87 (15-add-hero: WIP)

export function Topbar({ className }: { className?: string }) {
  const [mobMenuIsOpen, setMobMenuOpen] = useState(false);
  const handleClick = () => setMobMenuOpen(!mobMenuIsOpen);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className={"container max-w-354 px-1 h-15 flex justify-between items-center gap-x-5 " + (className ?? '')}>
=======
    <Container>
>>>>>>> 0761c4e (15-add-hero: WIP)
=======
    <Container className={"h-12 " + (className ?? "")}>
>>>>>>> 5d30ed0 (15-add-hero: WIP)
=======
    <Container>
>>>>>>> 56fae87 (15-add-hero: WIP)
=======
    <Container className={"h-12 " + (className ?? "")}>
>>>>>>> 8eac456 (15-add-hero: WIP)
      <Logo className="uppercase font-bold text-4xl whitespace-nowrap" />
      <SearchInput className="flex-1"></SearchInput>
      <div className="items-center md:justify-between gap-x-4 flex">
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
  );
}
