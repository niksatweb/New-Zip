import { CartItemCard } from "@/4_entities/cart"

export const CartList = () => {
  return (
    <main className="flex flex-col gap-x-">
      <CartItemCard></CartItemCard>
      <CartItemCard></CartItemCard>
      <CartItemCard></CartItemCard>
    </main>
  )
}
