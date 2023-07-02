import { Suspense, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import SpinnerCard from "~popup/components/spinner/spinner"
import WebDirectory from "~popup/components/web-directory/web-directory"

export default function WebDirectoryPage() {
  const location = useLocation()

  return (
    <div className="page">
      <header>
        <Link to={"/"} replace>
          <button>Back</button>
        </Link>
        <h2>{location.state.title ?? "Server list"}</h2>
      </header>
      <div className="card">
        <WebDirectory query={{}} />
      </div>
    </div>
  )
}
