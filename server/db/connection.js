import pg from 'pg'
import dataBase from '../config.js'
const pool = new pg.Pool({
    connectionString:dataBase.url,
    ssl: {rejectUnauthorized: false}
})

export default function query(text, params){
    return pool.query(text, params)
}