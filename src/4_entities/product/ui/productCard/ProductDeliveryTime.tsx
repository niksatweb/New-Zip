import { Truck } from "lucide-react"

export const ProductDeliveryTime = ({
  deliveryTime,
  className = "",
}: {
  deliveryTime: number
  className?: string
}) => {
  return (
    <div className={"flex items-center gap-x-2 mb-2" + className}>
      <Truck className="text-secondary size-4" />
      <p className="text-xs text-on-surface-variant">
        Срок поставки: {deliveryTime + " нед."}
      </p>
    </div>
  )
}
