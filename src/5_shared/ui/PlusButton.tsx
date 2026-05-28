import { Plus, ShoppingCartIcon } from "lucide-react"
import { Button } from "./Button"
import type { MouseEventHandler } from "react"

export const BasketButton = ({
  className = "",
  onClick,
}: {
  badge?: number
  className?: string
  onClick: () => void
}) => {
  return (
    <Button
      onClick={onClick}
      className={"cursor-pointer px-1 bg-slate-300 " + className}
    >
      <Plus />
    </Button>
  )
}
