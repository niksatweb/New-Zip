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
        className="h-[1.5em]"
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
          <circle cx="9" cy="9" r="7"></circle>
          <path d="m24 24-8-8"></path>
        </g>
      </svg>
      <Input type="search" placeholder={placeholder}></Input>
    </label>
  )
}
