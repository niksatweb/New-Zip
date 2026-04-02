import type { ProductBackend } from "../../types/product.backend"

export const ProductCard = ({
  className = "",
  product,
}: {
  className?: string
  product: ProductBackend
}) => {
  return <div className={"" + className}></div>
}
