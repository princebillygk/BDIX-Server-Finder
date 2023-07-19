import { Link, useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <div className="card">
        <h2>BDIX servers</h2>
        <p>FTP, IP TV and other servers in your network.</p>
        <div className="center pt-3">
          <button
            onClick={() =>
              navigate("/bdix/directory", {
                state: {
                  title: "All BDIX Servers"
                }
              })
            }>
            Browse
          </button>
        </div>
      </div>
      <div className="card">
        <h2>Torrents</h2>
        <p>
          Search and download Movies, Games, Softwares and anything else you
          want.
        </p>
        <div className="center pt-3">
          <div className="btn-group">
            <button onClick={() => navigate("/torrents/search")}>
              {" "}
              Search Torrents
            </button>

            <button onClick={() => navigate("/torrents/search")}>
              Torrent Sites
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
