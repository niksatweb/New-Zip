import type {
  ProductBackend,
  ProductDetailBackend,
} from "@/4_entities/product/types/product.backend"
// import { productMapper } from "../lib/product.mapper"

//I've left the commented code below because I think it can be useful for the future to change it and use for my cart entity.

// export const api = {
//   async getCartList(): Promise<ProductBackend[]> {
//     await new Promise((res) => setTimeout(res, 1000))
//     return cartList
//   },
// }

// // signal - to cancel request
// export async function getCartList(signal: AbortSignal) {
//   //  axiosInstance.get<ProductBackend[]>("/product")
//   const cartList =
//     await productMock.getList<ProductBackend[]>("/product")
//   return productBackendList.data.map((productBackend) =>
//     productMapper(productBackend)
//   )
// }

// export async function getProductDetail(id: string, signal: AbortSignal) {
//   //  axiosInstance.get<ProductDetailBackend>(`/product/${id}`)
//   const productDetailBackend =
//     await productMock.getDetail<ProductDetailBackend>(`/product/${id}`)

//   return productMapper(productDetailBackend.data)
// }

import { create } from "zustand"

export const useCartStore = create((set, get) => ({
  productsList: [],
  addProduct: (product: ProductBackend) =>
    set((state) => ({ productsList: [...state.productsList, product] })),
  removeProduct: () =>
    set((state) => ({ products: Math.max(0, state.products - 1) })),
  removeAllProducts: () => set({ products: 0 }),
  getCartList: () => {
    const productsList = get().productsList
    return productsList
  },
}))
