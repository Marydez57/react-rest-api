import { query } from "../db/connection.js";

export async function getAllMovies() {
  const result = query(`SELECT * FROM movies;`);
  return result.rows;
}
