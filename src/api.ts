import axios, { AxiosResponse } from 'axios'
import { countries } from './locations/countries'
import { LocationsResponse } from './locations/locations.interface'
import { Clan, ClanWar, ClanWarLog } from './response.interface'

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImMxNmNiOWIyLWQ2MjctNDE3ZS1hMTNkLTZjNzMzM2JlZWNhMiIsImlhdCI6MTY0MDY4ODczOCwic3ViIjoiZGV2ZWxvcGVyLzI2ODUyZGZlLTU1OTItMDNkOC1kMWJhLWIwMzgwNWI4ZjdkMCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjg5LjE3OC4xMjYuMTYzIl0sInR5cGUiOiJjbGllbnQifV19.MILQAVWVYVJrAuVjam3hoGgCOJoR4YMdN2oVrUL503z1MmN1nf8s6Y4L4spU83tRtAqXp4muR06J_GDhy0b4pg'

export const axiosInstance = axios.create({
  baseURL: 'https://api.clashofclans.com/v1/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export const getCurrentClanWar = async (clanTag: string): Promise<ClanWar> => {
  try {
    const response = await axiosInstance.get(`clans/${clanTag}/currentwar`)
    return response.data
  } catch (err) {
    throw err
  }
}

export const getClanWarLog = async (clanTag: string): Promise<ClanWarLog> => {
  try {
    const response = await axiosInstance.get(`clans/${clanTag}/warlog`)
    return response.data.items
  } catch (err) {
    throw err
  }
}

export const getClans = async (
  locationId: number = countries.Russia,
): Promise<Clan[]> => {
  try {
    const params = new URLSearchParams()
    params.set('locationId', String(locationId))
    const response = await axiosInstance.get(`clans?${params.toString()}`)
    return response.data.items
  } catch (err) {
    throw err
  }
}

export const getLocations = async (): Promise<LocationsResponse> => {
  try {
    const response = await axiosInstance.get('locations')
    return response.data
  } catch (err) {
    throw err
  }
}
