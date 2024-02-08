const db = require("../models/index");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");

exports.product_list = asyncHandler(async (req, res, next) => {
  const products = await db.Product.findAll();
  res.json(products);
});

exports.product_byId = asyncHandler(async (req, res, next) => {
  res.send(
    `NOT IMPLEMENTED: Product by id, product controller - product id: ${req.params.productId}`
  );
});

exports.product_create = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newUser = await db.Product.create(req.body);

    res.status(201).json(newUser);
  } catch (err) {
    res.json({ err: err });
  }
});

exports.product_update = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Product update, product controller");
});

exports.product_delete = asyncHandler(async (req, res, next) => {
  res.send(
    `NOT IMPLEMENTED: Product delete, product controller - product id: ${req.params.productId}`
  );
});
