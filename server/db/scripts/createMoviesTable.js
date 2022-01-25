import query from "../connection.js"


const sqlString = `CREATE TABLE IF NOT EXISTS movies(movie_id SERIAL PRIMARY KEY, title TEXT, releasedDate INT, movieRating INT);`

const createMoviesTable = async() => {
    const res = await query(sqlString)
    console.log('Movies Table Created', res)  
}
createMoviesTable()