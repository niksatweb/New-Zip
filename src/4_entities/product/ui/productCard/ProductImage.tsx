import type { ProductBackend } from "@/4_entities/product/types/product.backend"

export const ProductImage = ({
  product,
  className = "",
}: {
  product: ProductBackend
  className: string
}) => {
  return (
    <div className={className}>
      <img
        className={className}
        src={"src/" + product.previewImageUrl}
        alt={product.previewImageAlt}
      />
    </div>
  )
}
