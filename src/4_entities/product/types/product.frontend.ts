import type { ProductBackend, ProductDetailBackend } from "./product.backend"

export interface Product extends ProductBackend {}
export interface ProductDetail extends Product, ProductDetailBackend {}
