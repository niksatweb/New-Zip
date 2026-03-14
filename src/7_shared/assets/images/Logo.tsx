export const Logo = ({ className, href="#" }: { className: string, href?: string }) => {
    return (
        <a href={href}>
            <div className={className}>New-Zip</div>
        </a>
    )
}