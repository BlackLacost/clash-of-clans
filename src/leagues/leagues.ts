export enum Leagues {
  'Unranked' = 'Unranked',
  'Bronze League III' = 'Bronze League III',
  'Bronze League II' = 'Bronze League II',
  'Bronze League I' = 'Bronze League I',
  'Silver League III' = 'Silver League III',
  'Silver League II' = 'Silver League II',
  'Silver League I' = 'Silver League I',
  'Gold League III' = 'Gold League III',
  'Gold League II' = 'Gold League II',
  'Gold League I' = 'Gold League I',
  'Crystal League III' = 'Crystal League III',
  'Crystal League II' = 'Crystal League II',
  'Crystal League I' = 'Crystal League I',
  'Master League III' = 'Master League III',
  'Master League II' = 'Master League II',
  'Master League I' = 'Master League I',
  'Champion League III' = 'Champion League III',
  'Champion League II' = 'Champion League II',
  'Champion League I' = 'Champion League I',
  'Titan League III' = 'Titan League III',
  'Titan League II' = 'Titan League II',
  'Titan League I' = 'Titan League I',
  'Legend League' = 'Legend League',
}

const leagueList = [
  'Unranked',
  'Bronze League III',
  'Bronze League II',
  'Bronze League I',
  'Silver League III',
  'Silver League II',
  'Silver League I',
  'Gold League III',
  'Gold League II',
  'Gold League I',
  'Crystal League III',
  'Crystal League II',
  'Crystal League I',
  'Master League III',
  'Master League II',
  'Master League I',
  'Champion League III',
  'Champion League II',
  'Champion League I',
  'Titan League III',
  'Titan League II',
  'Titan League I',
  'Legend League',
]

export const getLeagueList = (
  minLeague: string = 'Unranked',
  maxLeague: string = 'Legend League',
) => {
  return leagueList.slice(
    leagueList.indexOf(minLeague),
    leagueList.indexOf(maxLeague) + 1,
  )
}
