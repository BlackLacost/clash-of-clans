import { getLocations } from './api'

export const getAllCountry = async (): Promise<string[]> => {
  const { items } = await getLocations()
  return items.filter((item) => item.isCountry).map((item) => item.name)
}

export const getCountriesIds = async () => {
  const { items } = await getLocations()
  return items
    .filter((item) => item.isCountry)
    .reduce((prev: { [x: string]: number }, curr) => {
      prev[curr.name] = curr.id
      return prev
    }, {})
}
