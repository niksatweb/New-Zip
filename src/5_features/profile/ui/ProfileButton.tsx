import { UserCircleIcon } from "lucide-react"
import { ButtonIcon, ButtonIconText } from "@/7_shared/ui/icons"

export const ProfileButton = ({ className, title }: { className?: string, title?: string }) => {
    return (
        <ButtonIcon href="#" className={className} title={title}>
            <UserCircleIcon className="size-8 xl:size-6"></UserCircleIcon>
            <ButtonIconText className="text-xs">Профиль</ButtonIconText>
        </ButtonIcon>
    )
}
