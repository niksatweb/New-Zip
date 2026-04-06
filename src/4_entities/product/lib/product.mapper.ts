import type {
  ProductBackend,
  ProductDetailBackend,
} from "../types/product.backend"
import type { Product, ProductDetail } from "../types/product.frontend"

export function productMapper<T extends ProductBackend>(
  data: T
): T extends ProductDetailBackend ? ProductDetail : Product {
  return { ...data } as any
}
