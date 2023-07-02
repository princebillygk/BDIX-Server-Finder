import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <>
      <div className="card">
        <h2>BDIX servers</h2>
        <p>FTP, IP TV and other servers in your network.</p>
        <div className="btn-group">
          <Link to="/directory" state={{ title: "All BDIX Servers" }}>
            <button>All</button>
          </Link>
          <Link to="/directory" state={{ title: "~BDIX Servers" }}>
            <button>Custom</button>
          </Link>
        </div>
      </div>
      <div className="card">
        <h2>Other Websites</h2>
        <p>Websites from lists created by the community.</p>
        <div className="btn-group">
          <button onClick={() => console.log(process.env.PLASMO_PUBLIC_API)}>
            Click here
          </button>
        </div>
      </div>
    </>
  )
}
