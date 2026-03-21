export const SearchInput = ({ className }: { className: string }) => {
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