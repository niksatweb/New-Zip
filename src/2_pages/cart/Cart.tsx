import { Container } from "@/5_shared/ui"
import { CartList } from "@/3_widgets/cart/ui"
import { useCartStore } from "@/4_entities/cart"
import { CartSummary } from "@/4_entities/cart"

export const Cart = () => {
  const { cartItems } = useCartStore((state) => state)



  return (
    <Container className="mx-auto flex">
      <main className="flex gap-x-16 justify-between w-full h-full">
        <CartList className="flex flex-col flex-1 gap-y-2" />
        <CartSummary className="flex-1"> </CartSummary>
      </main>
    </Container>
  )
}
