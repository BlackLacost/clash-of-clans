import { getClans } from '../api'
import { getLeagueList, Leagues } from '../leagues/leagues'
import { countries } from '../locations/countries'

export const getClansByLeagues = async (
  minLeague?: string,
  maxLeague?: string,
  countryId: number = countries.Russia,
) => {
  const clans = await getClans(countryId)
  return clans.filter((clan) =>
    getLeagueList(minLeague, maxLeague).includes(clan.warLeague.name),
  )
}

// class Thenable<T> extends Promise<T> {
//   public num: number

//   constructor(
//     executor: (resolve: CallableFunction, reject: CallableFunction) => void,
//     num: number,
//   ) {
//     super(executor)
//     this.num = num
//   }

//   setNum(num: number) {
//     this.num = num
//     return this
//   }
// }

// const t = new Thenable((resolve: CallableFunction) => {
//   setTimeout(() => resolve(t.num * 3))
// }, 2)

// ;(async () => {
//   console.log(t)
//   console.log(await t.setNum(10))
// })()

class Clans<T> extends Promise<T> {
  public countryId: number

  constructor(
    executor: (resolve: CallableFunction, reject: CallableFunction) => void,
  ) {
    super(executor)
    this.countryId = countries.Russia
  }

  country(countryId: number) {
    this.countryId = countryId
    return this
  }
}

// async function executor(resolve: CallableFunction, reject: CallableFunction) {
//   const c = await getClans(this.countryId)
//   if (this.countryId) {
//     resolve(c)
//   }
//   reject('Cant find clans')
// }

export const clans = new Clans(async function (
  resolve: CallableFunction,
  reject: CallableFunction,
) {
  console.log(Clans)
  const c = await getClans(clans.countryId)
  if (c) {
    resolve(c)
  }
  reject('Cant find clans')
})
// class Clans {
//   public countryId: number

//   constructor() {
//     this.countryId = countries.Russia
//   }

//   country(countryId: number) {
//     this.countryId = countryId
//     return this
//   }

//   async get(): ReturnType<typeof getClans> {
//     const c = await getClans(this.countryId)
//     if (c) {
//       return c
//     }
//     throw 'qwe'
//   }
// }

// export const clans = new Clans()
