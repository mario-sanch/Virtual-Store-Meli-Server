const OrderPayment = require("../models/orderPayment");
const asyncHandler = require("express-async-handler");

exports.orderPayment_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: order payment list - controller");
});

exports.orderPayment_byId = asyncHandler(async (req, res, next) => {
  res.send(
    `NOT IMPLEMENTED: order payment by id - controller, order payment id: ${req.params.orderPaymentId}`
  );
});

exports.orderPayment_byOrderId = asyncHandler(async (req, res, next) => {
  res.send(
    `NOT IMPLEMENTED: order payment by id - controller, order payment id: ${req.params.orderId}`
  );
});

exports.orderPayment_create = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: order payment create - controller");
});

exports.orderPayment_update = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: order payment update - controller");
});

exports.orderPayment_delete = asyncHandler(async (req, res, next) => {
  res.send(
    `NOT IMPLEMENTED: order payment delete - controller, order payment id: ${req.params.orderPaymentId}`
  );
});
