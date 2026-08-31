import { useContext, useState, type MouseEventHandler } from "react"
import { SidebarLink } from "./SidebarLink"
import { Link, useSearchParams } from "react-router"

type brandOption = string

export const Sidebar = ({
  className = "",
  brands,
  selectedManufacturer,
  handleClick,
}: {
  className?: string
  brands: brandOption[]
  selectedManufacturer: string
  handleClick: void
}) => {
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
      <ul
        className={"flex flex-col gap-y-1 border-b border-primary/10 mb-2 pb-2"}
      >
        {brands.map((c, n) => (
          <li className="" key={n}>
            <SidebarLink
              className={
                c === selectedManufacturer
                  ? "bg-primary text-primary-content rounded-r-lg "
                  : "hover:bg-primary/10 hover:rounded-r-lg "
              }
              onClick={() => handleClick(c)}
            >
              <span>{c}</span>
            </SidebarLink>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <button
            onClick={() => handleClick("all")}
            className="font-bold text-center py-2 w-full border border-primary/10 block hover:bg-primary hover:text-primary-content transition-all duration-300 cursor-pointer "
          >
            Все бренды
          </button>
        </li>
      </ul>
    </aside>
  )
}
