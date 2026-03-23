import { ButtonIcon } from "@/7_shared/ui/buttons"
import { Search } from "lucide-react"

const SearchButton = ({ className }: { className?: string }) => {
  return (
    <ButtonIcon href="#" className={"block lg:hidden mx-6" + (className ?? "")}>
      <Search />
    </ButtonIcon>
  )
}

export default SearchButton
