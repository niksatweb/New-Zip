import type { ProductBackend } from "@/4_entities/product/types/product.backend"

export interface CartItem extends ProductBackend {
  quantity: number
}
