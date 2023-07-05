import { Link, useLocation, useNavigate } from "react-router-dom"

import { useWebServers } from "../../hooks/web-servers"
import InnerPageLayout from "../components/Layouts/InnerPageLayout"
import ServerSelector from "../components/server-selector/server-selector"
import SpinnerCard from "../components/spinner/spinner"

export default function WebDirectoryPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const { servers, status, dispatch } = useWebServers(location.state.query)
  const selectedServers = servers.filter((s) => s.status === true)

  function handleSelect(id: string) {
    dispatch({ type: "select", id })
  }

  function handleDeselect(id: string) {
    dispatch({ type: "deselect", id })
  }

  function handleClearSelection() {
    dispatch({ type: "clearSelection" })
  }

  function handleSetSelection() {
    dispatch({ type: "selectAll" })
  }

  let content: React.JSX.Element

  switch (status) {
    case "success":
      content = (
        <ServerSelector
          servers={servers}
          onSelect={handleSelect}
          onDeselect={handleDeselect}
          onClearSelection={handleClearSelection}
          onSelectAll={handleSetSelection}
        />
      )
      break
    case "error":
      content = <p>Something went wrong</p>
      break
    default:
      content = <SpinnerCard />
      break
  }

  return (
    <InnerPageLayout title={location.state.title ?? "Server list"}>
      <div className="card">
        {content}
        <div className="center pt-4">
          <button
            {...((status !== "success" || selectedServers.length < 1) && {
              disabled: true
            })}
            onClick={() => {
              navigate("/server-list", {
                state: {
                  servers: servers.filter((s) => s.status === true)
                }
              })
            }}>
            Find availability
          </button>
        </div>
      </div>
    </InnerPageLayout>
  )
}
