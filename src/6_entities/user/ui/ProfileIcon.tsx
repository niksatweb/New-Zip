import { ButtonIcon } from "@/7_shared/ui/icons"

export const ProfileIcon = ({ className, title }: { className: string, title?: string }) => {
    return (
        <ButtonIcon className={className} title={title}/>
    )
}
