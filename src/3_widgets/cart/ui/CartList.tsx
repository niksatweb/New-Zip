import { CartItemCard } from "@/4_entities/cart"
import type { ProductBackend } from "@/4_entities/product/types/product.backend"

export const CartList = ({ list }: { list: ProductBackend[] }) => {
  if (list) {
    return (
      <main className="flex flex-col gap-x-">
        {list.map((i) => (
          <CartItemCard product={i} />
        ))}
      </main>
    )
  }
  return (
    <main className="flex flex-col gap-x-">
      <p>Nothing here yet</p>
    </main>
  )
}
