import { getClans, getClanWarLog, getCurrentClanWar } from './api'
import { countries } from './locations/countries'
import { pool } from './db/db'
import { getAllWarlog, insertWarlog } from './db/db.service'
import { getAllCountry, getCountriesIds } from './locations/locations.service'
import { clans, getClansByLeagues } from './clans/clans.servise'
import { leaguesApi } from './leagues/leagues.api'
import { getLeagues } from './leagues/leagues.service'
import { getLeagueList, Leagues } from './leagues/leagues'
import { Clan } from './response.interface'

const SIBYR = '%2320CGRVGPP'
const clanTag = SIBYR

async function notAttackswarlog() {
  const warlog = await getClanWarLog(clanTag)

  return warlog.map((war) =>
    war.clan?.members
      ?.filter((member) => member.attacks === undefined)
      .map((member) => member.name),
  )
}

async function notAttacks() {
  const clanWar = await getCurrentClanWar(clanTag)
  return clanWar.clan?.members
    ?.filter((member) => member.attacks === undefined)
    .map((member) => member.name)
}

async function main() {
  // const clanWar = await getCurrentClanWar(clanTag)
  // console.dir(clanWar)
  // const warlog = await getClanWarLog(clanTag)
  // console.log(warlog.filter((war) => war.clan?.members !== undefined))

  // console.log(await notAttacks())
  // await createDb()
  // Promise.all(warlog?.map((war) => insertWarlog(war)))
  // const t = await getAllWarlog()
  // console.log(
  //   t.rows
  //     .filter((s) => s.data.opponent.name === 'sun goku')
  //     .map((s) => s.data.clan.attacks),
  // )
  // console.log(await getClansByCountryId(countries.Russia))
  // console.log(
  //   await getClansByLeagues(
  //     Leagues['Crystal League III'],
  //     Leagues['Crystal League I'],
  //   ),
  // )
  // clans.country(countries.Russia).then((clans: Clan[]) => console.log(clans))
  // const c: Clan[] = await clans.country(countries.Russia)
  // console.log(c)
  console.log(await clans.country(countries.France).then())
  pool.end()
}

main()
  .then()
  .catch((err: any) => console.error(err))
