import { useEffect, useState } from "react"

import { Server } from "~types/server"

import SpinnerCard from "../spinner/spinner"

export interface GetServerQuery {}
async function getServers(query: GetServerQuery): Promise<Server[]> {
  const res = await fetch(`${process.env.PLASMO_PUBLIC_API}/servers`)
  return await res.json()
}

export interface WebDirectoryProps {
  query: GetServerQuery
}

export default function WebDirectory({ query }) {
  const { servers, status } = useWebServers(query)

  switch (status) {
    case "success":
      return (
        <div>
          Collection of BDIX servers:
          <table className="scrollable">
            <tbody>
              {servers.map((s, idx) => (
                <tr key={s.id}>
                  <td>{s.url}</td>
                  <td>lorem</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button>Start Search</button>
        </div>
      )
    case "error":
      return <p>Something went wrong</p>
    default:
      return <SpinnerCard />
  }
}

function useWebServers(query: GetServerQuery) {
  const [servers, setServers] = useState<Server[]>([])
  const [status, setStatus] = useState<"success" | "error" | "loading">(
    "loading"
  )

  useEffect(() => {
    let ignore = false
    getServers(query)
      .then((ss) => {
        if (ignore) {
          return
        }
        setServers(ss)
        setStatus("success")
      })
      .catch((e) => {
        if (ignore) {
          return
        }
        console.log(e)
        setStatus("error")
      })
    return () => {
      ignore = true
    }
  }, [query])

  return { servers, status }
}
