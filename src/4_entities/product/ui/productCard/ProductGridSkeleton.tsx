import { ProductCardSkeleton } from "./ProductCardSkeleton"

export const ProductGridSkeleton = ({
  className = "",
}: {
  className?: string
}) => {
  return (
    <>
      <ProductCardSkeleton></ProductCardSkeleton>
      <ProductCardSkeleton></ProductCardSkeleton>
      <ProductCardSkeleton></ProductCardSkeleton>
      <ProductCardSkeleton></ProductCardSkeleton>
      <ProductCardSkeleton></ProductCardSkeleton>
      <ProductCardSkeleton></ProductCardSkeleton>
      <ProductCardSkeleton></ProductCardSkeleton>
      <ProductCardSkeleton></ProductCardSkeleton>
      <ProductCardSkeleton></ProductCardSkeleton>
      <ProductCardSkeleton></ProductCardSkeleton>
      <ProductCardSkeleton></ProductCardSkeleton>
      <ProductCardSkeleton></ProductCardSkeleton>
      <ProductCardSkeleton></ProductCardSkeleton>
    </>
  )
}
