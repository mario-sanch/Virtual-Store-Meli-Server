const categoryRepository = require("../repositories/categoryRepository");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");

exports.categoryList = asyncHandler(async (req, res, next) => {
  const categories = await categoryRepository.categoryList();

  res.status(200).json(categories);
});

exports.categoryById = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const categoryId = req.params.categoryId;

  const categories = await categoryRepository.categoryById(categoryId);

  res.status(200).json(categories);
});

exports.categoryCreate = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newCategory = await categoryRepository.categoryCreate(req.body);

  res.status(201).json(newCategory);
});
