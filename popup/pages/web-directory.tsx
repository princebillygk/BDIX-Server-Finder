import { Suspense, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { useWebServers } from "~hooks/web-servers"
import SpinnerCard from "~popup/components/spinner/spinner"
import WebDirectory from "~popup/components/web-directory/web-directory"

export default function WebDirectoryPage() {
  const location = useLocation()
  const { servers, status } = useWebServers(location.state.query)

  let content: React.JSX.Element

  switch (status) {
    case "success":
      content = (
        <div className="scrollable" style={{ height: "150px" }}>
          {" "}
          <WebDirectory servers={servers} />{" "}
        </div>
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
          <button {...(status !== "success" && { disabled: true })}>
            Start Search
          </button>
        </div>
      </div>
    </div>
  )
}
