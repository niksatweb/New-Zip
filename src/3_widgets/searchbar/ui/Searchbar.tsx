import { Input } from "@/5_shared/ui"

export const Searchbar = ({
  className,
  placeholder,
}: {
  className?: string
  placeholder?: string
}) => {
  return (
    <label className={"input " + (className ?? "")}>
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <Input type="search" placeholder={placeholder}></Input>
    </label>
  )
}
