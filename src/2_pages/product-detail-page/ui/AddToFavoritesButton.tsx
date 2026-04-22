import { HeartIcon } from "lucide-react"

export const AddToFavoritesButton = () => {
  return (
    <button className="hover:text-secondary duration-300 transition-colors border border-primary/20 cursor-pointer text-xs tracking-widest font-bold flex w-fit text-primary gap-3 uppercase items-center self-stretch px-6">
      <HeartIcon className="" />
    </button>
  )
}
