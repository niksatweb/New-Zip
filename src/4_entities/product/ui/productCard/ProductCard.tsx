import { FavoritesButton } from "@/5_shared/ui"
import type { ProductBackend } from "../../types/product.backend"
import { ProductCondition } from "./ProductCondition"
import { ProductImage } from "./ProductImage"

export const ProductCard = ({
  className = "",
  product,
}: {
  className?: string
  product: ProductBackend
}) => {
  const condition = product.condition
  return (
    <div className={"relative group items-center justify-center " + className}>
      <ProductCondition
        condition={condition}
        className="absolute left-2 top-2 z-99"
      ></ProductCondition>
      <FavoritesButton className="absolute right-2 top-2 z-100" />
      <ProductImage className='w-full h-full scale-90 group-hover:scale-100 duration-700 transition-all object-contain mb-11 ' product={product}/>
    </div>
  )
}
