import { useState } from "react"
import { MemoryRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/home"
import ServerListPage from "./pages/server-list"
import WebDirectoryPage from "./pages/web-directory"

import "./styles/dark.scss"
import "./styles/global.scss"

import { search } from "torrent-search-api"

import TorrentSearchPage from "./pages/torrent-search"

function IndexPopup() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={"app" + (isDarkMode ? " dark" : "")}>
      <header>
        <h1>BDIX Server Finder</h1>
        <label className="darkModeBtn" htmlFor="isDarkMode">
          <input
            type="checkbox"
            name="isDarkMode"
            id="isDarkMode"
            onChange={() => {
              setIsDarkMode(!isDarkMode)
            }}
          />
          {isDarkMode ? "☀️ Switch to light mode" : "🌑 Switch to dark mode"}
        </label>
        <hr />
      </header>

      <main>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bdix/directory" element={<WebDirectoryPage />} />
            <Route path="/server-list" element={<ServerListPage />} />
            <Route path="/torrents/search" element={<TorrentSearchPage />} />
          </Routes>
        </MemoryRouter>
      </main>

      <footer>
        Made with love{" "}
        <a
          href="https://princebillygk.github.io"
          target="_blank"
          rel="noopener noreferrer">
          @princebillygk
        </a>{" "}
        2023
      </footer>
    </div>
  )
}

export default IndexPopup
