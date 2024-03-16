const db = require("../models/index");

exports.orderPaymentList = async () => {
  const payments = await db.OrderPayment.findAll();

  return payments;
};

exports.orderPaymentById = async (orderPaymentId) => {
  const payment = await db.OrderPayment.findByPk(orderPaymentId);

  return payment;
};

exports.orderPaymentByOrderId = async (orderId) => {
  const payment = await db.OrderPayment.findAll({
    Where: {
      OrderId: orderId,
    },
  });

  return payment;
};

exports.createOrderPayment = async (payment) => {
  try {
    const newPayment = await db.OrderPayment.create(payment);

    return newPayment;
  } catch (err) {
    return err;
  }
};

exports.updateOrderPayment = async (payment, paymentId) => {
  const result = await db.OrderPayment.update(payment, {
    where: {
      OrderPaymentId: paymentId,
    },
  });
  return result;
};

exports.deleteOrderPayment = async (payment) => {
  const result = await db.OrderPayment.update(payment, {
    where: {
      OrderPaymentId: paymentId.OrderPaymentId,
    },
  });

  return result;
};
