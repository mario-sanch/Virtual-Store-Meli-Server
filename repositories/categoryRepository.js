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

exports.updateCategory = async (category, categoryId) => {
  const result = await db.Category.update(category, {
    where: { CategoryId: categoryId },
  });

  return result;
};

exports.deleteCategory = async (categoryId) => {
  const result = await db.Category.update(
    { Enable: 0 },
    { where: { CategoryId: categoryId } }
  );

  return result;
};
