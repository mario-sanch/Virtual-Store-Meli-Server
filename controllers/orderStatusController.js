const OrderStatus = require("../models/orderStatus");
const asyncHandler = require("express-async-handler");

exports.orderStatus_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Order status list - order status controller");
});

exports.orderStatus_create = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Order status create - controller");
});

exports.orderStatus_update = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Order status update - controller");
});

exports.orderStatus_delete = asyncHandler(async (req, res, next) => {
  res.send(
    `NOT IMPLEMENTED: Order status delete - controller, order status id: ${req.params.orderStatusId}`
  );
});
