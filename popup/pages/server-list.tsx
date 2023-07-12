import { Server } from "http"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useImmer } from "use-immer"

import { ServerDirectory } from "~popup/components/server-directory/server-directory"
import { ServerResponseResult } from "~types/server"

import InnerPageLayout from "../components/Layouts/InnerPageLayout"
import ServerFinder from "../components/server-finder/server-finder"

export default function ServerListPage() {
  const servers = useLocation().state.servers
  const [numberOfServerChecked, setNumberOfServerChecked] = useState(0)
  const [found, updateFound] = useImmer<Record<string, ServerResponseResult[]>>(
    {}
  )
  const numberOfFound = Object.values(found).reduce((p, c) => p + c.length, 0)

  const findAvailability = async function () {
    for (const s of servers ?? []) {
      try {
        const startTime = performance.now()
        const result = await fetch(s.url)
        const endTime = performance.now()
        if (result.status === 200) {
          const result = {
            ...s,
            responseTimeInMs: Math.round(endTime - startTime)
          }
          updateFound((draft) => {
            if (Array.isArray(draft[s.category])) {
              draft[s.category].push(result)
            } else {
              draft[s.category] = [result]
            }
          })
        } else {
          throw new Error("Unavailable")
        }
      } catch {
      } finally {
        setNumberOfServerChecked((p) => p + 1)
      }
    }
  }

  useEffect(() => {
    if (numberOfServerChecked === 0) {
      setNumberOfServerChecked(0)
      updateFound((draft) => (draft = {}))
      findAvailability()
    }
  }, [])

  let content: React.JSX.Element

  if (numberOfServerChecked === servers.length) {
    content = <ServerDirectory servers={found}></ServerDirectory>
  } else {
    content = (
      <ServerFinder
        numberOfFound={numberOfFound}
        numberOfServer={servers.length}
        numberOfServerChecked={numberOfServerChecked}
      />
    )
  }

  return (
    <InnerPageLayout title="Server Lists">
      <>{content}</>
    </InnerPageLayout>
  )
}
