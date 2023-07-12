export type Server = {
  id: string
  url: string
  category: string
  status?: boolean
}

export type ServerResponseResult = Server & {
  responseTimeInMs: number
}
