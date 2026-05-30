import { CartItemCard, useCartStore } from "@/4_entities/cart"
import type { ProductBackend } from "@/4_entities/product/types/product.backend"

export const CartList = ({ className = "" }: { className: string }) => {
  const { cartItems, removeAllProducts } = useCartStore()
  if (cartItems.length !== 0) {
    return (
      <div className={className}>
        <button
          onClick={removeAllProducts}
          className={
            "hover:bg-slate-400 transition-all cursor-pointer self-end bg-slate-500 py-2 px-4 text-white border-2 border-slate-600"
          }
        >
          Очистить корзину
        </button>
        {cartItems.map((i, ind) => (
          <CartItemCard className="flex justify-between" key={ind} item={i} />
        ))}
      </div>
    )
  }
  return (
    <main className="flex flex-col">
      <p>Nothing in the cart yet</p>
    </main>
  )
}
