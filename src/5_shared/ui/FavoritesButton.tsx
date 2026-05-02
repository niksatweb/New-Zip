import { Heart } from "lucide-react"
import { Button } from "./Button"
import type { MouseEventHandler } from "react"

export const FavoritesButton = ({
  badge,
  className = "",
  onClick,
}: {
  badge?: number
  className?: string
  onClick: MouseEventHandler
}) => {
  return (
    <Button
      onClick={onClick}
      className={"cursor-pointer " + className}
      badge={badge}
    >
      <Heart />
    </Button>
  )
}
