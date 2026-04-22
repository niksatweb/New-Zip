import { Container } from "@/5_shared/ui"
import { CartList } from "@/3_widgets/cart/ui"

export const Cart = () => {
  return (
    <Container className="mx-auto flex">
      <main className="flex flex-col gap-x-16 justify-between w-full h-full">
        <h1 className="text-4xl text-center">Корзина</h1>
        <CartList></CartList>
      </main>
    </Container>
  )
}
