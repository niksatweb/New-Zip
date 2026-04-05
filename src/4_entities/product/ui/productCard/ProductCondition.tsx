import type { ProductBackend } from "../../types/product.backend"

export const ProductCondition = ({
  className = "",
  condition,
}: {
  className: string
  condition: ProductBackend["condition"]
}) => {
  return (
    <div
      className={
        "" +
        (condition === "New"
          ? "bg-blue-900 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter "
          : "bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter ") +
        className
      }
    >
      {condition === "New" ? "Новый" : "Б/У"}
    </div>
  )
}
