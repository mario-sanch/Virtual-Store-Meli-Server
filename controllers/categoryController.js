const categoryRepository = require("../repositories/categoryRepository");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const db = require("../models");

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

exports.categoryUpdate = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const categoryId = req.params.categoryId;

  const categoryFromDb = await categoryRepository.categoryById(categoryId);

  if (!categoryFromDb) {
    return res.status(404).json({ error: true, msg: "product not found" });
  }

  const categoryToUpdate = req.body;

  const result = await categoryRepository.updateCategory(
    categoryToUpdate,
    categoryId
  );

  res.status(200).json(result);
});

exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const categoryId = req.params.categoryId;

  const categoryToDelete = await categoryRepository.categoryById(categoryId);

  if (!categoryToDelete) {
    return res.status(404).json({
      error: true,
      msg: `Categoria ${categoryId} no se encontro en la base de datos`,
    });
  }

  const result = categoryRepository.deleteCategory(categoryId);

  res.status(200).json(result);
});
