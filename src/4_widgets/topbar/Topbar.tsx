import { CartButton } from "@/5_features/cart/ui"
import { FavoritesButton } from "@/5_features/favorites/ui"
import { ProfileButton } from "@/5_features/profile/ui"
import { Logo } from "@/7_shared/assets/images/Logo"
import { PhoneNumber } from "@/5_features/contact/ui"


export function Topbar() {
  return <div className="border-b">
    <div className="container mx-auto max-w-354 px-1 h-15 flex justify-between items-center">
      <Logo className="uppercase font-bold text-6xl" />
      <PhoneNumber className="flex gap-x-2 items-center hover:scale-102 transition-all duration-500 mx-1" />
      <div className="topbar-icons flex gap-x-1 items-center">
        <div className="ml-4">
          <FavoritesButton title="Избранное" className="hover:text-[#1e3a8a] flex flex-col items-center gap-y-1" />
        </div>
        <div className="ml-4">
          <CartButton title="Корзина" className="hover:text-[#1e3a8a] flex flex-col items-center gap-y-1" />
        </div>
        <div className="ml-4">
          <ProfileButton title="Профиль" className="hover:text-[#1e3a8a] flex flex-col items-center gap-y-1" />
        </div>
      </div>
    </div>
  </div>
}
