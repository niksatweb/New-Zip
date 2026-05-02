import type { ProductBackend } from "@/4_entities/product/types/product.backend"
import { ProductCard } from "@/4_entities/product"

export const CartItemCard = ({ product }: { product: ProductBackend }) => {
  return <ProductCard product={product} />
}
