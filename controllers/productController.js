const Product = require("../models/product");
const asyncHandler = require("express-async-handler");

exports.product_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Product list - product controller");
});

exports.product_byId = asyncHandler(async (req, res, next) => {
  res.send(
    `NOT IMPLEMENTED: Product by id, product controller - product id: ${req.params.productId}`
  );
});

exports.product_create = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Product create, product controller`);
});

exports.product_update = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Product update, product controller");
});

exports.product_delete = asyncHandler(async (req, res, next) => {
  res.send(
    `NOT IMPLEMENTED: Product delete, product controller - product id: ${req.params.productId}`
  );
});
