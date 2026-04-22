import type { ProductBackend } from "@/4_entities/product/types/product.backend"

export const Condition = ({
  className = "",
  condition,
}: {
  className?: string
  condition?: ProductBackend["condition"]
}) => {
  return (
    <div
      className={
        "" +
        (condition === "New"
          ? "bg-primary text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter w-20 "
          : "bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 uppercase tracking-tighter w-20 ") +
        className
      }
    >
      {condition === "New" ? "Новый" : "Б/У"}
    </div>
  )
}
