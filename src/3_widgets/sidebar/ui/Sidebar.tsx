import type { ReactNode } from "react"
import { SidebarLink } from "./SidebarLink"
import {useSearchParams} from "react-router"

export const Sidebar = ({ className = "" }: { className?: string }) => {
  const [params] = useSearchParams()
  const activeCategory = params.get("category")
  console.log(activeCategory)
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
        </li>
      </ul>
    </aside>
  )
}
