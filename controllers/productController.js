const db = require("../models/index");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");

//Add query params for pagination, limit and enabled
exports.product_list = asyncHandler(async (req, res, next) => {
  const products = await db.Product.findAll();
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

  const products = await db.Product.findAll({
    include: {
      model: db.Category,
      where: {
        CategoryId: categoryId,
      },
    },
  });

  res.status(200).json(products);
});

exports.product_byId = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const productId = req.params.productId;

  const product = await db.Product.findByPk(productId);

  res.status(200).json({ product });
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
  try {
    const { productId } = req.params;

    const foundProduct = await db.Product.findByPk(productId);

    if (!foundProduct) {
      return res
        .status(404)
        .json({ error: true, message: "producto no encontrado" });
    }

    const { Name, ImgUrl, Price, Description, Enable } = req.body;

    await db.Product.update(
      {
        Name: Name,
        ImgUrl: ImgUrl,
        Price: Price,
        Description: Description,
        Enable: Enable,
      },
      {
        where: {
          ProductId: productId,
        },
      }
    );

    return res.status(200).json(foundProduct);
  } catch (err) {}
});

exports.product_delete = asyncHandler(async (req, res, next) => {});
