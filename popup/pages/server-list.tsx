import { useLocation } from "react-router-dom"

import InnerPageLayout from "~popup/components/Layouts/InnerPageLayout"

export default function ServerListPage() {
  const location = useLocation()
  return (
    <InnerPageLayout title="Server Lists">
      <div className="center py-5">
        <div>
          <p className="ta-center">Checking availability of servers</p>
          <div className="center m-2">
            <progress
              style={{ width: "200px" }}
              value="43"
              max={location.state.servers.length}
            />
          </div>
          <p className="ta-center">
            Completed 4/{location.state.servers.length}
          </p>
          <p className="ta-center">100 Items found</p>
        </div>
      </div>
    </InnerPageLayout>
  )
}
