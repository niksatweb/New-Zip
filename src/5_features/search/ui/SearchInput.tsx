import { ButtonIcon } from "@/7_shared/ui/buttons"
import SearchButton from "./SearchButton"

export const SearchInput = ({ className }: { className: string }) => {
<<<<<<< HEAD
    return (
        <div className={className ?? ""}>
            <input
                type="text"
                className="input input-bordered w-full focus:outline-none"
                placeholder="Укажи нужный артикул..."
                list="search-suggestions"
            />
            <div className="w-full flex">
            <datalist id="search-suggestions">
            </datalist>
            </div>
        </div>
    )
}
=======
  return (
    <div className={className ?? ""}>
      <input
        type="text"
        className="input input-bordered w-full focus:outline-none hidden lg:flex"
        placeholder="Укажи нужный артикул..."
        list="search-suggestions"
      />
      <SearchButton />
    </div>
  )
}
>>>>>>> 56c1805 (15-add-hero: WIP)
