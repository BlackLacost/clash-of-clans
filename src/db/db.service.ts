import { ClanWarLogEntry } from '../response.interface'
import { pool } from './db'

export const createTable = async () => {
  const res = await pool.query(`
    CREATE TABLE json_test (
      id serial primary key,
      data jsonb
    )
  `)
  console.log(res)
}

export const insertWarlog = async (warlog: ClanWarLogEntry) => {
  const sql = `
    INSERT INTO json_test (data) VALUES ($1)
  `
  const values = [warlog]
  const res = await pool.query(sql, values)
}

export const getAllWarlog = () => {
  const sql = `SELECT * FROM json_test`
  return pool.query(sql)
}
