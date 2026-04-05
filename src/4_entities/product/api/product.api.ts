import type { ProductBackend } from "@/4_entities/product/types/product.backend"
import type { ProductDetailBackend } from "@/4_entities/product/types/product.backend"

import { productsList, ProductsDetailList } from "./product.mock"

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
