const db = require("./models");
const createServer = require("./server");
const app = createServer();
const port = 3001;

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});

module.exports = app;
