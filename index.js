const db = require("./models");

db.sequelize.sync().then(() => {
  //initialize express here
});
