import db from "../../connection.js";

const response = db.query(
  `CREATE TABLE IF NOT EXISTS movies (id SERIAL PRIMARY KEY, movieTitle TEXT, date_released INT);`
);

console.log(response);

db.end();
