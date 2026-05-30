import type { ReactNode } from "react"
import { useCartStore } from "../model/store"

export const CartSummary = ({
  className = "",
  children,
}: {
  className: string
  children: ReactNode
}) => {
    const { cartItems } = useCartStore();
  return <div className={"border-2 self-start "+className}>{children}</div>
}
