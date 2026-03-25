import { ShoppingCartIcon } from "lucide-react"
import { Button } from "./Button"

export const BasketButton = ({ badge }: { badge?: number }) => {
  return (
    <Button badge={badge}>
      <ShoppingCartIcon />
    </Button>
  )
}
