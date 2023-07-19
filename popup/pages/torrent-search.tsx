import { Link, useLocation, useNavigate } from "react-router-dom"

import InnerPageLayout from "../components/Layouts/InnerPageLayout"
import { Search } from "../components/search/search"

export default function TorrentSearchPage() {
  const location = useLocation()
  const navigate = useNavigate()

  async function handleSearch(searchTerm: string) {
    const response = await fetch(
      "https://btdig.com/search?" +
        new URLSearchParams({
          q: searchTerm
        })
    )
    console.log(response.body)
  }

  return (
    <InnerPageLayout title="Search torrents">
      <Search onSearch={handleSearch} />
    </InnerPageLayout>
  )
}
