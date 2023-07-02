import { Suspense, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import SpinnerCard from "~popup/components/spinner/spinner"
import WebDirectory from "~popup/components/web-directory/web-directory"

export default function WebDirectoryPage() {
  const fallback = (
    <>
      {" "}
      <p>Fetching Servers</p> <SpinnerCard />{" "}
    </>
  )

  return (
    <>
      <div>
        <div className="card">
          <Link to={"/"} replace>
            <button>Back</button>
          </Link>
          <WebDirectory query={{}} />
        </div>
      </div>
    </>
  )
}
