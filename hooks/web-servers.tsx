import { useEffect, useReducer, useState } from "react"

import { serverSelectionReducer } from "~reducers/selection"

import { Server } from "../types/server"

export interface GetServerQuery {}
async function getServers(query: GetServerQuery): Promise<Server[]> {
  const res = await fetch(`${process.env.PLASMO_PUBLIC_API}/servers/`)
  return await res.json()
}

export function useWebServers(query: GetServerQuery) {
  const [servers, dispatch] = useReducer(serverSelectionReducer, [])
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
        dispatch({
          type: "set",
          servers: ss
        })
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

  return { servers, status, dispatch }
}
