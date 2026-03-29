import type { ReactNode } from "react"
import { SidebarLink } from "./SidebarLink"

export const Sidebar = ({ className = "" }: { className?: string }) => {
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
          <SidebarLink to="/?categories=festo">
            <span>Festo</span>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/?categories=schneider">
            <span>Schneider</span>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/?categories=smc">
            <span>SMC</span>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/?categories=siemens">
            <span>Siemens</span>
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/?categories=allen-bradley">
            <span>Allen-Bradley</span>
          </SidebarLink>
        </li>
      </ul>
    </aside>
  )
}
