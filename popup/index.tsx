import { useState } from "react"

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
            onChange={(e) => {
              setIsDarkMode(!isDarkMode)
            }}
          />
          {isDarkMode ? "☀️ Switch to light mode" : "🌑 Switch to dark mode"}
        </label>
        <hr />
      </header>
      <div className="card">
        <h2>Find BDIX servers</h2>
        <p>Search available FTP, IP TV and other servers in your network.</p>
        <div className="btn-group">
          <button>Find all</button>
          <button>Custom</button>
        </div>
      </div>
      <div className="card">
        <h2>Find other Websites</h2>
        <p>Find available websites from lists created by the community.</p>
        <div className="btn-group">
          <button>Click here</button>
        </div>
      </div>

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
