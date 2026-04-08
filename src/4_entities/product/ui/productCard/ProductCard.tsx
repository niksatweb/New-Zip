import { FavoritesButton } from "@/5_shared/ui"
import type { ProductBackend } from "../../types/product.backend"
import { ProductCondition } from "./ProductCondition"
import { ProductImage } from "./ProductImage"
import { ProductBrand } from "./ProductBrand"
import { ProductName } from "./ProductName"
import { ProductDeliveryTime } from "./ProductDeliveryTime"
import { ProductPrice } from "./ProductPrice"
import { BasketButton } from "@/5_shared/ui"

export const ProductCard = ({
  className = "",
  product,
}: {
  className?: string
  product: ProductBackend
}) => {
  return (
    <div
      className={
        "relative group items-center justify-center cursor-pointer group " +
        className
      }
    >
      <ProductCondition
        condition={product.condition}
        className="absolute left-0 top-0 z-99"
      ></ProductCondition>
      <FavoritesButton className="absolute right-0 top-0 z-100" />
      <ProductImage
        className="w-full h-full scale-95 group-hover:scale-100 duration-700 transition-all object-contain "
        product={product}
      />
      <ProductBrand brand={product.brand} />
      <ProductName className="group-hover:underline" name={product.name} />
      <ProductDeliveryTime deliveryTime={product.deliveryTime} />
      <div className="flex justify-between">
        <ProductPrice price={product.price} />
        <BasketButton className="cursor-pointer py-3 px-2 rounded-lg bg-primary text-primary-content" />
      </div>
    </div>
  )
}
