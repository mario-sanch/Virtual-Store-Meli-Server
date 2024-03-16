const db = require("../models/index");

exports.orderList = async () => {
  const orders = await db.Order.findAll();

  return orders;
};

exports.orderById = async (orderId) => {
  const order = await db.Order.findByPk(orderId);

  return order;
};

exports.ordersByUserId = async (userId) => {
  const orders = await db.Order.findAll({
    where: {
      UserId: userId,
    },
  });

  return orders;
};

exports.ordersByStatusId = async (statusId) => {
  const orders = await db.Order.findAll({ where: { StatusId: statusId } });

  return orders;
};

exports.createOrder = async (order) => {
  const newOrder = await db.Order.create(order);

  return newOrder;
};

exports.updateOrder = async (order, orderId) => {
  const result = await db.Order.update(order, { where: { OrderId: orderId } });

  return result;
};

exports.deleteOrder = async (orderId) => {
  const result = await db.Order.destroy({
    where: {
      OrderId: orderId,
    },
  });

  return result;
};
