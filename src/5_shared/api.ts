import type { ProductBackend } from "@/4_entities/product/types/product.backend"

export const api = {
  async getProductList(): Promise<ProductBackend[]> {
    await new Promise((res) => setTimeout(res, 1000))
    return []
  },
}
