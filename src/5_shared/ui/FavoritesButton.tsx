import { Heart } from "lucide-react"
import { Button } from "./Button"

export const FavoritesButton = ({ badge }: { badge?: number }) => {
  return (
    <Button badge={badge}>
      <Heart />
    </Button>
  )
}
