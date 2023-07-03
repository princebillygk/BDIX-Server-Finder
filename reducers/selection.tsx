import { Server } from "../types/server"

type ServerSelectionReducerAction =
  | {
      type: "select" | "deselect"
      id: number
    }
  | {
      type: "clearSelection" | "selectAll"
    }
  | {
      type: "set"
      servers: Server[]
    }

export function serverSelectionReducer(
  servers: Server[],
  action: ServerSelectionReducerAction
) {
  let idx: number
  switch (action.type) {
    case "select":
      idx = servers.findIndex((s) => s.id === action.id)
      return [
        ...servers.slice(0, idx),
        { ...servers[idx], status: true },
        ...servers.slice(idx + 1)
      ]
    case "deselect":
      idx = servers.findIndex((s) => s.id === action.id)
      return [
        ...servers.slice(0, idx),
        { ...servers[idx], status: false },
        ...servers.slice(idx + 1)
      ]
    case "clearSelection":
      return servers.map((s) => ({ ...s, status: false }))
    case "selectAll":
      return servers.map((s) => ({ ...s, status: true }))
    case "set":
      return action.servers
    default:
      return [...servers]
  }
}
