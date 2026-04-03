import { ShoppingCartIcon } from "lucide-react"
import { Button } from "./Button"

export const BasketButton = ({
  badge,
  className = "",
}: {
  badge?: number
  className?: string
}) => {
  return (
    <Button className={className} badge={badge}>
      <ShoppingCartIcon />
    </Button>
  )
}
