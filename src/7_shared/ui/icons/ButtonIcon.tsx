import { UserCircleIcon } from "lucide-react"

export const ButtonIcon = ({ className, title }: { className?: string, title?: string }) => {
    return (
        <a title={title} href="#">
            <UserCircleIcon className={className}></UserCircleIcon>
        </a>
    )
}