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