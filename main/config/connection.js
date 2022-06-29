require("dotenv").config();
const Sequelize = require("sequelize");


console.log(process.env.DB_NAME, 'dbname')
let sequelize;
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
module.exports = sequelize;
