import { ShoppingCartIcon } from "lucide-react"

export const AddToCartButton = ({
  onClick,
}: {
  onClick: React.MouseEventHandler
}) => {
  return (
    <button
      onClick={onClick}
      className="border border-primary/20 cursor-pointer bg-linear-to-br from-secondary to-secondary/80 text-xs tracking-widest font-bold flex w-fit text-primary-content gap-3 uppercase items-center px-6 h-14"
    >
      <ShoppingCartIcon size="16" />
      <span>В корзину</span>
    </button>
  )
}
