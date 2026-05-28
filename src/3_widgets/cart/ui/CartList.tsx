import { CartItemCard, useCartStore } from "@/4_entities/cart"
import type { ProductBackend } from "@/4_entities/product/types/product.backend"

export const CartList = ({ className = "" }: { className: string }) => {
  const { cartItems } = useCartStore()
  if (cartItems.length !== 0) {
    return (
      <main className={className}>
        {cartItems.map((i, ind) => (
          <CartItemCard className="flex justify-between" key={ind} item={i} />
        ))}
      </main>
    )
  }
  return (
    <main className="flex flex-col">
      <p>Nothing in the cart yet</p>
    </main>
  )
}
