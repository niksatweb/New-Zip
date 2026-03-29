import { FooterHeader } from "./FooterHeader"
import { FooterNavLink } from "./FooterNavLink"

export const FooterNav = () => {
  return (
    <div className="flex gap-x-12 h-full">
      <div className="flex flex-col justify-between">
        <FooterHeader>Компания</FooterHeader>
        <ul className="flex flex-col gap-y-2">
          <FooterNavLink to="privacy-policy">
            Политика конфиденциальности
          </FooterNavLink>
          <FooterNavLink to="payments">Условия оплаты</FooterNavLink>
        </ul>
      </div>
      <div className="flex flex-col gap-y-4">
        <FooterHeader>Поддержка</FooterHeader>
        <ul className="flex flex-col gap-y-2">
          <FooterNavLink to="returns">Возврат товара</FooterNavLink>
          <FooterNavLink to="support">Техническая поддержка</FooterNavLink>
        </ul>
      </div>
    </div>
  )
}
