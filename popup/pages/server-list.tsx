import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useImmer } from "use-immer"

import InnerPageLayout from "~popup/components/Layouts/InnerPageLayout"

type ServerResponseResult = {
  url: string
  responseTimeInMs: number
}

export default function ServerListPage() {
  const servers = useLocation().state.servers
  const [progressValue, setProgressValue] = useState(0)
  const [found, updateFound] = useImmer<Record<string, ServerResponseResult[]>>(
    {}
  )
  const numberOfFound = Object.values(found).reduce((p, c) => p + c.length, 0)
  console.log(found)

  const findAvailability = async function () {
    for (const s of servers ?? []) {
      try {
        const startTime = performance.now()
        const result = await fetch(s.url)
        const endTime = performance.now()
        if (result.status === 200) {
          const result = {
            url: s.url,
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
        setProgressValue((p) => p + 1)
      }
    }
  }

  useEffect(() => {
    if (progressValue === 0) {
      setProgressValue(0)
      updateFound((draft) => (draft = {}))
      findAvailability()
    }
  }, [])

  return (
    <InnerPageLayout title="Server Lists">
      <div className="center py-5">
        <div>
          <p className="ta-center">Checking availability of servers</p>
          <div className="center m-2">
            <progress
              style={{ width: "200px" }}
              value={progressValue}
              max={servers.length}
            />
          </div>
          <p className="ta-center">
            Completed {progressValue}/{servers.length}
          </p>
          <p className="ta-center">{numberOfFound} Items found</p>
        </div>
      </div>
    </InnerPageLayout>
  )
}
