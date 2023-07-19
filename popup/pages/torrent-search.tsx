import { Link, useLocation, useNavigate } from "react-router-dom"

import InnerPageLayout from "../components/Layouts/InnerPageLayout"
import { Search } from "../components/search/search"

export default function TorrentSearchPage() {
  const location = useLocation()
  const navigate = useNavigate()

  async function handleSearch(searchTerm: string) {}

  return (
    <InnerPageLayout title="Search torrents">
      <Search onSearch={handleSearch} />
    </InnerPageLayout>
  )
}
