import { Container } from "@/5_shared/ui"
import { CartList } from "@/3_widgets/cart/ui"
import { useCartStore } from "@/4_entities/cart"
import { useEffect } from "react"

export const Cart = () => {
  const { getCartList } = useCartStore((state) => state)
  const cartList = getCartList()
  console.log(getCartList())

  return (
    <Container className="mx-auto flex">
      <main className="flex flex-col gap-x-16 justify-between w-full h-full">
        <h1 className="text-4xl text-center">Корзина</h1>
        <CartList list={cartList}></CartList>
      </main>
    </Container>
  )
}
