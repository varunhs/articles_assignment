const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "assignment1_database",
  password: "r00t",
  port: "5432",
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

// module.exports =client;

module.exports = {
  query(sqlStatement, values) {
    return client
      .query(sqlStatement, values)
      .then((res) => res.rows)
      .catch((err) => {
        throw err;
      });
  },
};
