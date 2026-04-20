import { formatPrice } from "@/5_shared/lib"

export const Price = ({
  price = 0,
  className = "",
}: {
  price?: number
  className?: string
}) => {
  return (
    <div className={"flex flex-col gap-1 " + className}>
      <p className={"text-4xl font-bold text-primary"}>{formatPrice(price)}</p>
      <p className="text-xs uppercase tracking-widest">Цена с учётом НДС 22%</p>
    </div>
  )
}
