import { axiosInstance } from '../api'
import { League } from './leagues.interfaces'

interface LeaguesResponse {
  items: League[]
  paging: { cursors: {} }
}

export const leaguesApi = {
  async getLeagues() {
    try {
      const response = await axiosInstance.get<LeaguesResponse>('leagues')
      return response.data
    } catch (err) {
      throw err
    }
  },
}
