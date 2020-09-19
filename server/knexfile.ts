import path from "path";

module.exports = {
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
  //   filename: path.resolve(__dirname, "src", "database", "database.sqlite"),
  // },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "database", "seeds"),
  },
  useNullAsDefault: true,
};
