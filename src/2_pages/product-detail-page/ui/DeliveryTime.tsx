import type { ReactNode } from "react"
import { Truck } from "lucide-react"

export const DeliveryTime = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-2 items-center text-sm">
      <div>
        <Truck className="text-secondary" />
      </div>
      <p>
        Срок доставки до Вашего склада (в пределах РФ):{" "}
        <span className="font-bold">{`${children} нед.`}</span>
      </p>
    </div>
  )
}
