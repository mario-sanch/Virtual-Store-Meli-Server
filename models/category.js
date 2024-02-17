module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING,
      },
      Enable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "categories",
    }
  );

  Category.associate = (models) => {
    Category.belongsToMany(models.Product, { through: "ProductsByCategory" });
  };

  return Category;
};
