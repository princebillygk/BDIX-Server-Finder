type ServerFinderProps = {
  numberOfServerChecked: number
  numberOfServer: number
  numberOfFound: number
}

export default function ServerFinder({
  numberOfServerChecked,
  numberOfServer,
  numberOfFound
}: ServerFinderProps) {
  return (
    <div className="center py-5">
      <div>
        <p className="ta-center">Checking availability of servers</p>
        <div className="center m-2">
          <progress
            style={{ width: "200px" }}
            value={numberOfServerChecked}
            max={numberOfServer}
          />
        </div>
        <p className="ta-center">
          Completed {numberOfServerChecked}/{numberOfServer}
        </p>
        <p className="ta-center">{numberOfFound} Items found</p>
      </div>
    </div>
  )
}
