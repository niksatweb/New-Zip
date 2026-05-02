import { ShoppingCartIcon } from "lucide-react"
import { Button } from "./Button"

export const BasketButton = ({
  badge = 0,
  className = "",
  onClick,
}: {
  badge?: number
  className?: string
  onClick?: any
}) => {
  return (
    <Button
      onClick={onClick}
      className={"cursor-pointer " + className}
      badge={badge > 0 ? badge : ""}
    >
      <ShoppingCartIcon />
    </Button>
  )
}
