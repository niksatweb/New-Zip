import type { SearchInputProps } from "../types"

import { useState } from "react";

export const SearchInput = ({ className = '', placeholder = 'Поиск по каталогу...', onSearch }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  }
  return (
    <form>

    </form>

  )
}
