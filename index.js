const db = require("./models");
const express = require("express");
const app = express();
const port = 3001;

const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const orderPaymentsRoutes = require("./routes/orderPayment");
const orderRouter = require("./routes/order");
const orderStatusRouter = require("./routes/orderStatus");
const productRouter = require("./routes/product");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola soy la ruta base de la app tienda virtual meli");
});

// routes
app.use("/api/categories", categoryRoutes);
app.use("/api/orderpayments", orderPaymentsRoutes);
app.use("/api/orders", orderRouter);
app.use("/api/orderstatus", orderStatusRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRoutes);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});

module.exports = app;
