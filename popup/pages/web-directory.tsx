import { Suspense, useEffect, useReducer, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { useWebServers } from "../../hooks/web-servers"
import { serverSelectionReducer } from "../../reducers/selection"
import { Server } from "../../types/server"
import ServerSelector from "../components/server-selector/server-selector"
import SpinnerCard from "../components/spinner/spinner"

export default function WebDirectoryPage() {
  const location = useLocation()
  const { servers, status, dispatch } = useWebServers(location.state.query)
  const selectedServers = servers.filter((s) => s.status === true)

  function handleSelect(id: number) {
    dispatch({ type: "select", id })
  }

  function handleDeselect(id: number) {
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
    <div className="page">
      <header>
        <Link to={"/"} replace>
          <button>Back</button>
        </Link>
        <h2>{location.state.title ?? "Server list"}</h2>
      </header>
      <div className="card">
        {content}
        <div className="center pt-4">
          <button
            {...((status !== "success" || selectedServers.length < 1) && {
              disabled: true
            })}
            onClick={() => console.log(selectedServers)}>
            Start Search
          </button>
        </div>
      </div>
    </div>
  )
}
