import { Heart } from "lucide-react"
import { Button } from "./Button"

export const FavoritesButton = ({
  badge,
  className = "",
}: {
  badge?: number
  className?: string
}) => {
  return (
    <Button className={className} badge={badge}>
      <Heart />
    </Button>
  )
}
