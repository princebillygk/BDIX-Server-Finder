import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

import { Server, ServerResponseResult } from "../../../types/server"

interface ServerDirectoryProps {
  servers: Record<string, ServerResponseResult[] | Server[]>
}

export function ServerDirectory({ servers }: ServerDirectoryProps) {
  const categories = Object.keys(servers).sort()
  if (categories.length === 0) {
    return (
      <div className="center">
        <h1>No Server Found</h1>
      </div>
    )
  }

  return (
    <Tabs>
      <TabList>
        {categories.map((c) => (
          <Tab key={c}>{c}</Tab>
        ))}
      </TabList>

      {categories.map((c) => (
        <TabPanel key={c}>
          <div className="scrollable" style={{ height: "150px" }}>
            <table>
              <tbody>
                {servers[c].map((s) => (
                  <tr>
                    <td>
                      <b>Server Name</b>{" "}
                      <a href={s.url} target="_blank" rel="noopener noreferrer">
                        {s.url} ➡️
                      </a>
                    </td>
                    {(s as ServerResponseResult).responseTimeInMs !==
                    undefined ? (
                      <td>{(s as ServerResponseResult).responseTimeInMs} ms</td>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  )
}
