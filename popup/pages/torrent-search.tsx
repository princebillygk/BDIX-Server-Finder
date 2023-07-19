import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

import InnerPageLayout from "../components/Layouts/InnerPageLayout"
import { Search } from "../components/search/search"

export default function TorrentSearchPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const [torrentList, setTorrentList] = useState<string[]>([])

  async function handleSearch(searchTerm: string) {
    const response = await fetch(
      "https://btdig.com/search?" +
        new URLSearchParams({
          q: searchTerm,
          p: "0"
        })
    )

    const parser = new DOMParser()
    const htmlDoc = parser.parseFromString(await response.text(), "text/html")
    const results = htmlDoc.getElementsByClassName("one_result")

    const torrents = []
    for (const r of results) {
      torrents.push(r.querySelector("div.torrent_name>a").textContent)
    }

    setTorrentList(torrents)
  }

  return (
    <InnerPageLayout title="Search torrents">
      <>
        <Search onSearch={handleSearch} />
        {torrentList.map((t) => (
          <a>{t}</a>
        ))}
      </>
    </InnerPageLayout>
  )
}
