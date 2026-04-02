import { FavoritesButton } from "@/5_shared/ui"
import type { ProductBackend } from "../../types/product.backend"
import { ProductCondition } from "./ProductCondition"

export const ProductCard = ({
  className = "",
  product,
}: {
  className?: string
  product: ProductBackend
  }) => {
    const condition = product.condition;
  return (
    <div className={"relative " + className}>
      <ProductCondition condition={condition} className="absolute left-0 top-0"
      ></ProductCondition>
      <FavoritesButton className="absolute right-0 top-0 z-100" />
    </div>
  )
}
