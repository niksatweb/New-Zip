import type { ProductBackend } from "@/4_entities/product/types/product.backend"

export const ProductImage = ({
  product,
  className = "",
}: {
  product: ProductBackend
  className: string
}) => {
  return (
    <div className="h-60">
      <img
        className={className}
        src={"src/" + product.previewImageUrl}
        alt={product.previewImageAlt}
      />
    </div>
  )
}
