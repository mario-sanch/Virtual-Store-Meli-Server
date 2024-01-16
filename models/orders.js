module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    OrderId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
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
    Status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Comments: {
      type: DataTypes.STRING,
    },
  });

  return Order;
};
