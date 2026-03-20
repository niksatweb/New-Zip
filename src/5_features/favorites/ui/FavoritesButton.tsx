import { ButtonIcon, ButtonIconText } from "@/7_shared/ui/buttons"
import { Heart } from "lucide-react"

export const FavoritesButton = ({
  className,
  title,
}: {
  className?: string
  title?: string
}) => {
  return (
    <ButtonIcon href="#" className={className} title={title}>
      <Heart className="size-8 xl:size-6"></Heart>
      <ButtonIconText className="text-xs">Избранное</ButtonIconText>
    </ButtonIcon>
  )
}
