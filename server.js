const express = require("express");

const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const orderPaymentsRoutes = require("./routes/orderPayment");
const orderRouter = require("./routes/order");
const orderStatusRouter = require("./routes/orderStatus");
const productRouter = require("./routes/product");

function createServer() {
  const app = express();
  app.use(express.json());
  // routes
  app.use("/api/categories", categoryRoutes);
  app.use("/api/orderpayments", orderPaymentsRoutes);
  app.use("/api/orders", orderRouter);
  app.use("/api/orderstatus", orderStatusRouter);
  app.use("/api/products", productRouter);
  app.use("/api/users", userRoutes);
  return app;
}

module.exports = createServer;
