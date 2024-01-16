module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ImgUrl: {
      type: DataTypes.STRING,
    },
    Price: {
      type: DataTypes.DOUBLE,
    },
    Description: {
      type: DataTypes.STRING,
    },
    Enable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return Product;
};
