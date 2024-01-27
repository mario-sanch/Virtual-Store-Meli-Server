module.exports = (sequelize, DataTypes) => {
  const orderStatus = sequelize.define(
    "OrderStatus",
    {
      StatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      StatusName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "orderstatuses",
    }
  );

  orderStatus.associate = (models) => {
    orderStatus.hasMany(models.Order, {
      foreignKey: {
        name: "StatusId",
        allowNull: false,
      },
      onDelete: "cascade",
    });
  };
  return orderStatus;
};
