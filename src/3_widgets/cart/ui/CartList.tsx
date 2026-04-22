import { CartItemCard } from "@/4_entities/cart/ui"

export const CartList = () => {
  return (
    <main className="flex flex-col gap-x-">
      <CartItemCard></CartItemCard>
      <CartItemCard></CartItemCard>
      <CartItemCard></CartItemCard>
    </main>
  )
}
