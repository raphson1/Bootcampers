const express = require("express");
const expHbs = require("express-handlebars");
require("dotenv").config();
const routes = require("./main/controllers");
const sequelize = require("./main/config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const sessionOptions = {
//   secret: "Red Sox",
//   resave: false,
//   saveUninitialized: true,
//   cookie: { },
//   store: new sequelizeStore({ db: sequelize }),
// };
const PORT = process.env.PORT || 3001;
const app = express();
const hbs = expHbs.create();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(routes);
// app.use(session(sessionOptions));

//***DEBUGGED FORCE has to equal false or else it won't work correctly. 7/1 Bexi */
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("now listening on PORT", PORT);
  });
});
