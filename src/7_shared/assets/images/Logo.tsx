export const Logo = ({
  className,
  href = "#",
}: {
  className: string
  href?: string
}) => {
  return (
    <a href={href} className="flex items-center  gap-x-1">
      <span className={`${className} leading-none`}>New-Zip</span>
      <span className="text-xs ml-1 w-50 hidden sm:block">
        Поставки промышленных комплектующих и запчастей
      </span>
    </a>
  )
}
