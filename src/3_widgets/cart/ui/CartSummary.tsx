import * as z from "zod"

const CartSummaryOptions = z.object({
  className: z.string(),
  totalAmount: z.number(),
})

type CartSummaryOptions = z.infer<typeof CartSummaryOptions>

export const CartSummary = ({ className, totalAmount }: CartSummaryOptions) => {
  return <div className={className}>{`This is cart summary`}</div>
}
