import { Server } from "../../../types/server"
import SpinnerCard from "../spinner/spinner"

export default function WebDirectory({ servers }: { servers: Server[] }) {
  return (
    <table>
      <tbody>
        {servers.map((s, idx) => (
          <tr key={s.id}>
            <td>{s.url}</td>
            <td>lorem</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
