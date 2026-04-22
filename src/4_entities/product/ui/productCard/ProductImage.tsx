import type { ProductBackend } from "../../types/product.backend"

export const ProductImage = ({
  alt,
  src,
  className = "",
}: {
  alt?: string
  src?: string
  className?: string
}) => {
  return <img className={className} src={src} alt={alt} />
}
