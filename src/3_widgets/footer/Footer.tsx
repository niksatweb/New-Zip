import { Container } from "@/5_shared/ui/Container"
import { Logo } from "@/5_shared/assets/images/Logo"
import { FooterNav } from "./ui/FooterNav"
import { FooterHeader } from "./ui/FooterHeader"
import { FooterNavLink } from "./ui/FooterNavLink"
import { EmailButton, PhoneButton } from "@/5_shared/ui"

export const Footer = ({ className = "" }: { className?: string }) => {
  return (
    <footer>
      <Container className={"items-center " + className}>
        <div className="flex flex-col lg:flex-row lg:flex py-30 items-center lg:justify-between items-stretch">
          <div className="lg:max-w-80 flex lg:flex-col lg:justify-between gap-y-4">
            <Logo className="text-2xl" />
            <p className="text-xs text-primary/50 leading-5 font-semibold">
              Профессиональный поставщик промышленного оборудования и
              компонентов. Мы объединяем надежность поставок с инновационными
              логистическими решениями.
            </p>
          </div>
          <FooterNav />
          <div className="flex flex-col gap-y-4">
            <FooterHeader>Контакты</FooterHeader>
            <ul className="flex flex-col gap-y-2">
              <PhoneButton tel="8800554322" className="font-bold text-xl">
                8 800 55 43-22
              </PhoneButton>
              <EmailButton
                className="text-md text-primary/50"
                mailto="sales@new-zip.ru"
              >
                sales@new-zip.ru
              </EmailButton>
            </ul>
          </div>
        </div>
        <div></div>
      </Container>
    </footer>
  )
}
