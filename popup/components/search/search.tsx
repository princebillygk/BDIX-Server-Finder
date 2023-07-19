import { useState } from "react"

export interface SearchProps {
  onSearch: (s: string) => Promise<void> | void
}

export function Search({ onSearch }: SearchProps) {
  const [searchText, setSearchText] = useState("")
  return (
    <div className="card center">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="search"
        name="search"
        id="search"
      />
      <button onClick={() => onSearch(searchText)} type="submit">
        🔍
      </button>
    </div>
  )
}
