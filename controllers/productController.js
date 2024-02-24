const productRepository = require("../repositories/productRepository");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");

//Add query params for pagination, limit and enabled
exports.product_list = asyncHandler(async (req, res, next) => {
  const products = await productRepository.productList();
  res.status(200).json(products);
});

//Add pagination, limit, enabled
// https://sequelize.org/docs/v7/querying/select-in-depth/
exports.productsByCategory = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const categoryId = req.params.categoryId;

  const products = await productRepository.productsByCategory(categoryId);

  res.status(200).json(products);
});

exports.product_byId = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const productId = req.params.productId;

  const product = await productRepository.productById(productId);

  res.status(200).json({ product });
});

exports.product_create = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newProduct = await productRepository.createProduct(req.body);

    res.status(201).json(newProduct);
  } catch (err) {
    res.json({ err: err });
  }
});

exports.product_update = asyncHandler(async (req, res, next) => {
  try {
    const { productId } = req.params;

    const foundProduct = await productRepository.productById(productId);

    if (!foundProduct) {
      return res
        .status(404)
        .json({ error: true, message: "producto no encontrado" });
    }

    const updatedProduct = await productRepository.updateProduct(
      req.body,
      productId
    );

    return res.status(200).json(updatedProduct);
  } catch (err) {}
});

exports.product_delete = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;

  //check if product exists

  await productRepository.deleteProduct(productId);

  //retrive product again to check if enable is false

  return res.status(200).json({ msg: "product disabled" });
});
