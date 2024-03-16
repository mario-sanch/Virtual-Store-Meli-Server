const db = require("../models/index");

exports.orderStatusList = async () => {
  const orderStatusList = await db.OrderStatus.findAll();

  return orderStatusList;
};

exports.orderStatusById = async (orderStatusId) => {
  const orderStatus = await db.OrderStatus.findByPk(orderStatusId);

  return orderStatus;
};

exports.createOrderStatus = async (orderStatus) => {
  const newOrderStatus = await db.OrderStatus.create(orderStatus);

  return newOrderStatus;
};

exports.updateOrderStatus = async (orderStatus, orderStatusId) => {
  const result = await db.OrderStatus.update(orderStatus, {
    where: { StatusId: orderStatusId },
  });

  return result;
};

exports.deleteOrderStatus = async (orderStatusId) => {
  const result = await db.OrderStatus.destroy({
    where: { StatusId: orderStatusId },
  });

  return result;
};
