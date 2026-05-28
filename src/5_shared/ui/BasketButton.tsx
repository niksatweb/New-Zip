import { ShoppingCartIcon } from "lucide-react"
import { Button } from "./Button"

export const BasketButton = ({
  badge,
  className = "",
  onClick,
}: {
  badge?: number | undefined
  className?: string
  onClick?: any
}) => {
  return (
    <Button
      onClick={onClick}
      className={"cursor-pointer " + className}
      badge={badge ? badge : undefined}
    >
      <ShoppingCartIcon />
    </Button>
  )
}
