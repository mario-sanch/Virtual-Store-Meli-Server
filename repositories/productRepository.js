const db = require("../models/index");

exports.productList = async () => {
  const products = await db.Product.findAll();
  return products;
};

exports.productsByCategory = async (categoryId) => {
  const products = await db.Product.findAll({
    include: {
      model: db.Category,
      where: {
        CategoryId: categoryId,
      },
    },
  });

  return products;
};

exports.productById = async (productId) => {
  const product = await db.Product.findByPk(productId);

  return product;
};

exports.createProduct = async (product) => {
  const newProduct = await db.Product.create(product);

  return newProduct;
};

exports.updateProduct = async (product, productId) => {
  const updatedProduct = await db.Product.update(product, {
    where: { ProductId: productId },
  });

  return updatedProduct;
};

exports.deleteProduct = async (productId) => {
  await db.Product.update(
    { Enable: 0 },
    {
      where: {
        ProductId: productId,
      },
    }
  );

  return;
};
