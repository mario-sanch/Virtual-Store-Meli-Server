const productRepository = require("../repositories/productRepository");
const categoryRepository = require("../repositories/categoryRepository");
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
  var errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(404).json({ errors: errors.array() });
  }

  const { productId } = req.params;

  const product = await productRepository.productById(productId);

  if (!product) {
    return res.status(404).json({
      error: true,
      msg: "producto no fue encontrado en la base de datos",
    });
  }

  const result = await productRepository.deleteProduct(productId);

  res.status(200).json(result);
});

exports.createProductByCategory = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { productId } = req.params;
  const { categoryId } = req.params;

  const product = await productRepository.productById(productId);

  if (!product) {
    return res.status(404).json({
      error: true,
      msg: `El producto con id ${productId} no fue encontrado`,
    });
  }

  const category = await categoryRepository.categoryById(categoryId);

  if (!category) {
    return res.status(404).json({
      error: true,
      msg: `La categoria con el id ${categoryId} no fue encontrada`,
    });
  }

  const productByCategory = await productRepository.createProductByCategory(
    product,
    category
  );

  res.status(201).json(productByCategory);
});

exports.deleteProductByCategory = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { productId, categoryId } = req.params;

  const product = await productRepository.productById(productId);
  const category = await categoryRepository.categoryById(categoryId);

  if (!product) {
    return res.status(400).json({
      errors: true,
      msg: "El producto no se existe en la base de datos",
    });
  }

  if (!category) {
    return res.status(400).json({
      errors: true,
      msg: "La categoria no existe en la base de datos",
    });
  }

  const result = await productRepository.removeProductByCategory(
    product,
    category
  );

  res.status(200).json(result);
});
