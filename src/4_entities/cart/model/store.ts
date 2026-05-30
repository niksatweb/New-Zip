import type {
  ProductBackend,
  ProductDetailBackend,
} from "@/4_entities/product/types/product.backend"
import type { CartItem } from "../types/cartItem"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { ProductDetail } from "@/4_entities/product"

interface cartState {
  cartItems: CartItem[]
  addProduct: (product: ProductDetail) => void
  removeItem: (id: ProductBackend["id"]) => void
  removeAllProducts: () => void
}

export const useCartStore = create<cartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addProduct: (product: ProductDetail) =>
        set((state: cartState) => {
          const existingItem = state.cartItems.find(
            (item) => item.id === product.id
          )

          if (existingItem) {
            // Товар уже в корзине → увеличиваем количество
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }

          // Нового товара нет → добавляем с quantity = 1
          return {
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
          }
        }),
      removeItem: (id: ProductBackend["id"]) =>
        set((state) => ({
          cartItems: state.cartItems.filter((i: CartItem) => i.id !== id),
        })),
      removeAllProducts: () => set({ cartItems: [] }),
    }),
    { name: "cartItem" }
  )
)
