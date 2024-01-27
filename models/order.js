module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      OrderId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      OrderDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      TotalPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      Comments: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "orders",
    }
  );

  Order.associate = (models) => {
    Order.hasMany(models.OrderPayment, {
      foreignKey: {
        name: "OrderId",
        allowNull: false,
      },
      onDelete: "cascade",
    });

    Order.belongsToMany(models.Product, { through: "ProductsByOrder" });
  };

  return Order;
};
