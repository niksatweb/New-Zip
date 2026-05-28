import type { CartItem } from "../types/cartItem"

import { FavoritesButton } from "@/5_shared/ui"
import { ProductCondition, type ProductDetail } from "@/4_entities/product"
import { ProductImage } from "@/4_entities/product/ui/productCard/ProductImage"
import { ProductBrand } from "@/4_entities/product/ui/productCard/ProductBrand"
import { ProductName } from "@/4_entities/product/ui/productCard/ProductName"
import { ProductDeliveryTime } from "@/4_entities/product/ui/productCard/ProductDeliveryTime"
import { ProductPrice } from "@/4_entities/product/ui/productCard/ProductPrice"
import { BasketButton } from "@/5_shared/ui"
import { useNavigate } from "react-router"
import { useCartStore } from "@/4_entities/cart"
import type { ProductBackend } from "@/4_entities/product/types/product.backend"

export const CartItemCard = ({
  className = "",
  item,
}: {
  className?: string
  item: CartItem
}) => {
  const navigate = useNavigate()
  const handleCardClick = (e: React.MouseEvent) => {
    navigate(`/product-detail/${item.id}`)
  }
  const addToCart = useCartStore((state) => state.addProduct)


  return (
    <div
      onClick={handleCardClick}
      className={
        "flex relative group items-center justify-between cursor-pointer group gap-x-1 " +
        className
      }
    >
      <ProductCondition
        condition={item.condition}
        className="absolute left-0 top-0 z-99"
      ></ProductCondition>
      <div className="">
        <ProductImage
          className="w-30 scale-95 group-hover:scale-100 duration-700 transition-all object-contain "
          src={item.previewImageUrl}
          alt={item.previewImageAlt}
        />
      </div>
      <div className="mr-auto">
        <ProductBrand brand={item.brand} />
        <ProductName className="group-hover:underline" name={item.name} />
        <ProductDeliveryTime deliveryTime={item.deliveryTime} />
        <FavoritesButton onClick={() => {}} />
      </div>
      <div className="flex justify-between">
        <ProductPrice price={item.price} />
      </div>
      <button className="px-1 bg-slate-300 rounded-2">-</button>
      <div className="mx-2">{`Quantity: ${item.quantity}`}</div>
      <button className="px-1 bg-slate-300">+</button>
    </div>
  )
}
