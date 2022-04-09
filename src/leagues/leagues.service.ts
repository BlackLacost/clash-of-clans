import { leaguesApi } from './leagues.api'

export const getLeagues = async (): Promise<string[]> => {
  const leagues = await leaguesApi.getLeagues()
  return leagues.items.map((item) => item.name)
}
