import { ShoppingCartIcon } from "lucide-react"

export const AddToCartButton = () => {
  return (
    <button className="border border-primary/20 cursor-pointer bg-linear-to-br from-secondary to-secondary/80 text-xs tracking-widest font-bold flex w-fit text-primary-content gap-3 uppercase items-center py-4 px-6">
      <ShoppingCartIcon size="16" />
      <span>В корзину</span>
    </button>
  )
}
