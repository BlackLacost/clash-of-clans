interface Location {
  id: number
  name: string
  isCountry: boolean
}

export interface LocationsResponse {
  items: Location[]
  paging: {
    cursors: {}
  }
}
