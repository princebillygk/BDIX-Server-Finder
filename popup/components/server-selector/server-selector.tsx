import { useReducer } from "react"

import { serverSelectionReducer } from "../../../reducers/selection"
import { Server } from "../../../types/server"

interface ServerSelectorProps {
  servers: Server[]
  onSelect: (id: string) => void
  onDeselect: (id: string) => void
  onClearSelection: () => void
  onSelectAll: () => void
}

export default function ServerSelector({
  servers,
  onSelect,
  onDeselect,
  onClearSelection,
  onSelectAll
}: ServerSelectorProps) {
  console.log(servers)
  return (
    <div>
      <div className="btn-group center">
        <button onClick={onSelectAll}>Select All</button>
        <button onClick={onClearSelection}>Deselect All</button>
      </div>
      <div className="scrollable" style={{ height: "150px" }}>
        <table>
          <tbody>
            {servers.map((s, idx) => (
              <tr key={s.id}>
                <td>
                  <input
                    onChange={(e) =>
                      e.target.checked ? onSelect(s.id) : onDeselect(s.id)
                    }
                    checked={s.status ?? false}
                    type="checkbox"
                    name={s.url}
                    id={s.url}
                  />
                </td>
                <td>
                  <label className="link" htmlFor={s.url}>
                    {s.url}
                  </label>
                </td>
                <td className="ta-right">
                  <span className="tag">{s.category}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
