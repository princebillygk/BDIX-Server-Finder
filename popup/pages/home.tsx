import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <>
      <div className="card">
        <h2>Find BDIX servers</h2>
        <p>Search available FTP, IP TV and other servers in your network.</p>
        <div className="btn-group">
          <Link to="/search">
            <button>Find all</button>
          </Link>
          <button>Custom</button>
        </div>
      </div>
      <div className="card">
        <h2>Find other Websites</h2>
        <p>Find available websites from lists created by the community.</p>
        <div className="btn-group">
          <button onClick={() => console.log(process.env.PLASMO_PUBLIC_API)}>
            Click here
          </button>
        </div>
      </div>
    </>
  )
}
