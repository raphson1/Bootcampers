const Sequelize = require("sequelize");
require("dotenv").config();
console.log(process.env.DB_USER, "hello")
if (process.env.JAWSDB) {
  sequelize = new Sequelize(process.env.JAWSDB);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}
sequelize.query(
  `CREATE DATABASE IF NOT EXISTS codinghire_db`,
  function (err, results) {
    console.log(results);
    console.log(err);
  }
);
module.exports = sequelize;
