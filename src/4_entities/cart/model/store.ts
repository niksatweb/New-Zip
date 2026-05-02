import type {
  ProductBackend,
  ProductDetailBackend,
} from "@/4_entities/product/types/product.backend"

import { create } from "zustand"

export const useCartStore = create((set, get) => ({
  cartList: [],
  addProduct: (product: ProductBackend) =>
    set((state) => ({ cartList: [...state.cartList, product] })),
  removeProduct: () =>
    set((state) => ({ products: Math.max(0, state.products - 1) })),
  removeAllProducts: () => set({ products: 0 }),
  getCartList: () => {
    const cartList = get().cartList
    return cartList
  },
}))
