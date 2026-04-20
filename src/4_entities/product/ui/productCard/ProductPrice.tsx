import { formatPrice } from "@/5_shared/lib"

export const ProductPrice = ({
  price = 0,
  className = "",
}: {
  price?: number
  className?: string
}) => {
  return (
    <div className={className}>
      <p className={"text-lg text-primary"}>{formatPrice(price)}</p>
      <p className="text-xs">с НДС 22%</p>
    </div>
  )
}
