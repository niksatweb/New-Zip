import { FavoritesButton } from "@/5_shared/ui"
import type { ProductBackend } from "@/4_entities/product/types/product.backend"
import { ProductCondition } from "@/4_entities/product"
import { ProductImage } from "@/4_entities/product/ui/productCard/ProductImage"
import { ProductBrand } from "@/4_entities/product/ui/productCard/ProductBrand"
import { ProductName } from "@/4_entities/product/ui/productCard/ProductName"
import { ProductDeliveryTime } from "@/4_entities/product/ui/productCard/ProductDeliveryTime"
import { ProductPrice } from "@/4_entities/product/ui/productCard/ProductPrice"
import { BasketButton } from "@/5_shared/ui"
import { useNavigate } from "react-router"
import { useCartStore } from "@/4_entities/cart"

export const CartItemCard = ({
  className = "",
  product,
}: {
  className?: string
  product: ProductBackend
}) => {
  const navigate = useNavigate()
  const handleCardClick = (e: React.MouseEvent) => {
    navigate(`/product-detail/${product.id}`)
  }
  const addToCart = useCartStore((state) => state.addProduct)
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div
      onClick={handleCardClick}
      className={
        "flex relative group items-center justify-start cursor-pointer group " +
        className
      }
    >
      <ProductCondition
        condition={product.condition}
        className="absolute left-0 top-0 z-99"
      ></ProductCondition>
      <FavoritesButton className="absolute right-0 top-0 z-100" />
      <div className="h-60">
        <ProductImage
          className="w-30 scale-95 group-hover:scale-100 duration-700 transition-all object-contain "
          src={product.previewImageUrl}
          alt={product.previewImageAlt}
        />
      </div>
      <ProductBrand brand={product.brand} />
      <ProductName className="group-hover:underline" name={product.name} />
      <ProductDeliveryTime deliveryTime={product.deliveryTime} />
      <div className="flex justify-between">
        <ProductPrice price={product.price} />
        <BasketButton
          onClick={handleAddToCart}
          className="cursor-pointer py-3 px-2 rounded-lg bg-primary text-primary-content"
        />
      </div>
    </div>
  )
}
