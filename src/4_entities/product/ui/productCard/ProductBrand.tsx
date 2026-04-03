export const ProductBrand = ({
  brand,
  className = "",
}: {
  brand: string
  className?: string
}) => {
  return (
    <p
      className={
        "text-[10px] font-bold text-on-surface-variant opacity-60 uppercase tracking-widest mb-1 " +
        className
      }
    >
      {brand}
    </p>
  )
}
