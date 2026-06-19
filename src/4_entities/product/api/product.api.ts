import type { ProductBackend } from "../types/product.backend"
import type { ProductDetailBackend } from "../types/product.backend"
import { productMapper } from "../lib/product.mapper"

import { productsList, ProductsDetailList, productMock } from "./product.mock"

export const api = {
  async getProductList(): Promise<ProductBackend[]> {
    await new Promise((res) => setTimeout(res, 1000))
    return productsList
  },
  async getProductDetail(id: string): Promise<ProductDetailBackend | null> {
    await new Promise((res) => setTimeout(res, 1000))
    return ProductsDetailList.find((product) => product.id === id) || null
  },
}

// signal - to cancel request
export async function getProductList(signal: AbortSignal) {
  //  axiosInstance.get<ProductBackend[]>("/product")
  const productBackendList =
    await productMock.getList<ProductBackend[]>("/product")
  return productBackendList.data.map((productBackend) =>
    productMapper(productBackend)
  )
}

export async function getProductDetail(id: string, signal: AbortSignal) {
  //  axiosInstance.get<ProductDetailBackend>(`/product/${id}`)
  const productDetailBackend =
    await productMock.getDetail<ProductDetailBackend>(`/product/${id}`)

  return productMapper(productDetailBackend.data)
}
