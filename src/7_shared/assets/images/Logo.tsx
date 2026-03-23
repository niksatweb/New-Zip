<<<<<<< HEAD
export const Logo = ({ className, href="#" }: { className: string, href?: string }) => {
    return (
        <a href={href} className="flex items-center  gap-x-1">
            <span className={`${className} leading-none`}>New-Zip</span>
            <span className="text-xs ml-1 hidden sm:block">Поставки промышленных <br /> комплектующих и запчастей</span>
        </a>
    )
}
=======
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
      <span className="text-xs ml-1 w-45 hidden sm:block">
        Поставки промышленных комплектующих и запчастей
      </span>
    </a>
  )
}
>>>>>>> 56c1805 (15-add-hero: WIP)
