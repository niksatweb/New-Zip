export const ProductCardSkeleton = () => {
  return (
    <div className="overflow-hidden p-1">
      <div className="w-full h-56 bg-primary/20 animate-pulse"></div>
      <div className="mt-3 bg-primary/20 animate-pulse w-16 h-4"></div>
      <div className="mt-1 bg-primary/20 animate-pulse w-full h-4"></div>
      <div className="mt-8 bg-primary/20 animate-pulse w-40 h-4"></div>
      <div className="flex justify-between">
        <div>
          <div className="mt-2 bg-primary/20 animate-pulse w-24 h-6"></div>
          <div className="mt-1 bg-primary/20 animate-pulse w-16 h-4"></div>
        </div>
        <div className="mt-1 bg-primary/20 animate-pulse w-8 h-12"></div>
      </div>
    </div>
  )
}
