import { SidebarLink } from "./SidebarLink"
<<<<<<< HEAD
import { Link, useSearchParams } from "react-router"

export const Sidebar = ({ className = "" }: { className?: string }) => {
  const categories = [
    { value: "festo", label: "Festo" },
    { value: "schneider", label: "Schneider" },
    { value: "smc", label: "SMC" },
    { value: "siemens", label: "Siemens" },
    { value: "allen-bradley", label: "Allen-Bradley" },
  ]

  const [searchParams] = useSearchParams()
  const activeCategory = searchParams.get("category")
  const createLink = (category?: string) => {
    if (!category) return "/"
    return `/?category=${category}`
  }
  const isActiveCategory = (value?: string) => {
    if (!value && !activeCategory) return true
    return activeCategory === value
  }

=======
import {useSearchParams} from "react-router"

export const Sidebar = ({ className = "" }: { className?: string }) => {
  const [params] = useSearchParams()
  const activeCategory = params.get("category")
  console.log(activeCategory)
>>>>>>> e720bcbe10cdd942de173225514bee7f6fbcc8b4
  return (
    <aside className={className}>
      <div className="py-6">
        <h2 className="text-lg font-bold text-primary leading-4 mb-1">
          Категории брендов
        </h2>
        <p className="text-xs text-primary/50 leading-5 font-semibold">
          Промышленная автоматизация
        </p>
      </div>
<<<<<<< HEAD
      {categories.map((c) => (
        <ul
          className={
            "flex flex-col gap-y-1 border-b border-primary/10 mb-2 " +
            (isActiveCategory(c.value)
              ? "bg-primary text-primary-content rounded-r-lg"
              : "")
          }
        >
          <li className="">
            <SidebarLink to={createLink(c.value)}>
              <span>{c.label}</span>
            </SidebarLink>
          </li>
        </ul>
      ))}
      <ul>
        <li>
          <Link
            className="font-bold text-center py-2 w-full border border-primary/10 block hover:bg-primary hover:text-primary-content transition-all duration-300 "
            to="/"
          >
            Все бренды
          </Link>
=======
      <ul className="flex flex-col gap-y-1">
        <li className="">
          <SidebarLink to="/?category=festo">
            <span>Festo</span>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/?category=schneider">
            <span>Schneider</span>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/?category=smc">
            <span>SMC</span>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/?category=siemens">
            <span>Siemens</span>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/?category=allen-bradley">
            <span>Allen-Bradley</span>
          </SidebarLink>
>>>>>>> e720bcbe10cdd942de173225514bee7f6fbcc8b4
        </li>
      </ul>
    </aside>
  )
}
