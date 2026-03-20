import { Phone } from "lucide-react"

export const PhoneNumber = ({ className }: { className?: string }) => {
  return (
    <a href="tel:88124481523" className={className}>
      <Phone className="size-8" />
      <span className="text-xl">8 812 448-15-23</span>
    </a>
  )
}
