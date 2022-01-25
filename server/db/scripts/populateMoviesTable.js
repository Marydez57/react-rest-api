import query from "../connection"

const populateMoviesTable = async () => {
    const movies = await query('INSERT INTO movies (title, releasedDate, movieRating) VALUES($1, $2, $3) RETURNING title, releasedDate, movieRating', [title, releasedDate, movieRating]);
    console.log(movies)
}
populateMoviesTable()