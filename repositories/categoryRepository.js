const db = require("../models/index");

exports.categoryList = async () => {
  const categories = await db.Category.findAll();

  return categories;
};

exports.categoryById = async (categoryId) => {
  const categories = await db.Category.findByPk(categoryId);

  return categories;
};

exports.categoryCreate = async (category) => {
  const newCategory = await db.Category.create(category);

  return newCategory;
};
