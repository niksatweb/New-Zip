import SearchButton from "./SearchButton"

export const SearchInput = ({ className }: { className: string }) => {
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
<<<<<<< HEAD
>>>>>>> 56c1805 (15-add-hero: WIP)
=======
>>>>>>> 4238c89 (13-add-topbar: WIP)
