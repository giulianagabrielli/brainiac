import knex from "knex";
import path from "path";

const db = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 8889,
    user: "root",
    password: "root",
    database: "brainiac",
  },
  // client: "sqlite3",
  // connection: {
  //   filename: path.resolve(__dirname, "database.sqlite"),
  // },
  useNullAsDefault: true,
});

export default db;
