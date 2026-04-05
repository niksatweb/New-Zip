import { ProductCardSkeleton } from "./ProductCardSkeleton"

export const ProductGridSkeleton = ({
  className = "",
}: {
  className?: string
}) => {
  return (
    <>
      {Array.from({ length: 12 }).map((i) => (
        <ProductCardSkeleton></ProductCardSkeleton>
      ))}
    </>
  )
}
