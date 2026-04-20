import type { ProductBackend } from "../../../4_entities/product/types/product.backend"

export const ProductAvailability = ({
  className = "",
  onStock,
}: {
  className?: string
  onStock?: ProductBackend["onStock"]
}) => {
  return (
    <div
      className={
        "" +
        (onStock ? "bg-primary text-primary-content text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter w-20 "
          : "bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter w-20 ") +
        className
      }
    >
      {onStock ? "В наличии" : "Под заказ"}
    </div>
  )
}
