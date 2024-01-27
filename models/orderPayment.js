module.exports = (sequelize, DataTypes) => {
  const OrderPayment = sequelize.define(
    "OrderPayment",
    {
      OrderPaymentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      PaymentDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      AmountPaid: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      tableName: "orderpayments",
    }
  );

  return OrderPayment;
};
