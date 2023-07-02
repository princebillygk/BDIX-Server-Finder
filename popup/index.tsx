import { useState } from "react"
import { MemoryRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/home"
import WebDirectoryPage from "./pages/web-directory"

import "./styles/dark.scss"
import "./styles/global.scss"

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
            <Route path="/directory" element={<WebDirectoryPage />} />
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
