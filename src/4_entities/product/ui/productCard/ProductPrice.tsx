import { formatPrice } from "@/5_shared/lib"

export const ProductPrice = ({
  price,
  className = "",
}: {
  price: number
  className?: string
}) => {
  return (
    <div>
      <p className={"text-xl text-primary" + className}>{formatPrice(price)}</p>
      <p className="text-[10px]">с НДС 22%</p>
    </div>
  )
}
