import { ShoppingCart } from "lucide-react"
import { ButtonIcon, ButtonIconText } from "@/7_shared/ui/button"

export const CartButton = ({ className, title }: { className?: string, title?: string }) => {
    return (
        <ButtonIcon href="#" className={className} title={title}>
            <ShoppingCart className="size-8 xl:size-6"></ShoppingCart>
            <ButtonIconText className="text-xs">Корзина</ButtonIconText>
        </ButtonIcon>
    )
}