interface ClanWarAttack {
  order?: number
  attackerTag?: string
  defenderTag?: string
  stars?: number
  destructionPercentage?: number
  duration?: number
}

interface ClanWarMember {
  tag?: string
  name?: string
  mapPosition?: number
  townhallLevel?: number
  opponentAttacks?: number
  bestOpponentAttack?: ClanWarAttack
  attacks?: ClanWarAttack[]
}

interface WarClan {
  destructionPercentage?: number
  tag?: string
  name?: string
  badgeUrls?: {
    small?: string
    mediuam?: string
    large?: string
  }
  clanLevel?: number
  attacks?: number
  stars?: number
  expEarned?: number
  members?: ClanWarMember[]
}

export interface ClanWarLogEntry {
  clan?: WarClan
  teamSize?: number
  attacksPerMember?: 1 | 2
  opponent?: WarClan
  endTime?: Date
  result?: string
}

export type ClanWarLog = ClanWarLogEntry[]

export interface ClanWar {
  clan?: WarClan
  teamSize?: number
  attacksPerMember?: 1 | 2
  opponent?: WarClan
  startTime?: Date
  state?: 'preparation'
  endTime?: Date
  preparationStartTime?: Date
}

interface WarLeague {
  name: string
  id: number
}

interface League {
  name: string
  id: number
  iconUrls: {}
}

interface ClanMember {
  league: League
  tag: string
  name: string
  role: string
  expLevel: number
  clanRank: number
  previousClanRank: number
  donations: number
  donationsReceived: number
  trophies: number
  versusTrophies: number
}

interface Language {
  name: string
  id: number
  languageCode: string
}

interface Labels {
  name: {}
  id: number
  iconUrls: {}
}

interface Location {
  localizedName: string
  id: number
  name: string
  isCountry: true
  countryCode: string
}

export interface Clan {
  warLeague: WarLeague
  memberList: ClanMember[]
  tag: string
  clanVersusPoints: number
  requiredTrophies: number
  requiredVersusTrophies: number
  requiredTownhallLevel: number
  isWarLogPublic: true
  warWinStreak: number
  warWins: number
  warTies: number
  warLosses: number
  warFrequency: string
  clanPoints: number
  chatLanguage: Language
  clanLevel: number
  labels: Labels[]
  name: string
  location: Location
  type: string
  members: number
  description: string
  badgeUrls: {}
}
