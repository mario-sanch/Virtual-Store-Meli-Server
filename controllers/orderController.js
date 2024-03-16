const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const orderRepository = require("../repositories/orderRepository");

exports.orderList = asyncHandler(async (req, res, next) => {
  const orders = await orderRepository.orderList();

  res.status(200).json(orders);
});

// create a new field in db called order code
exports.orderByCode = asyncHandler(async (req, res, next) => {});

exports.orderById = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
});

exports.ordersByUserId = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId } = req.params;

  const orders = await orderRepository.ordersByUserId(userId);

  res.status(200).json(orders);
});

exports.ordersByStatusId = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { statusId } = req.params;

  const orders = await orderRepository.ordersByStatusId(statusId);

  res.status(200).json(orders);
});

exports.createOrder = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newOrder = await orderRepository.createOrder(req.body);

    res.status(201).json(newOrder);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

exports.updateOrder = asyncHandler(async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { orderId } = req.params;

    const orderFromDb = await orderRepository.orderById(orderId);

    if (!orderFromDb) {
      return res.status(404).json({
        error: true,
        msg: `La orden con id: ${orderId} no se encuentra en la db`,
      });
    }

    const result = await orderRepository.updateOrder(req.body, orderId);

    res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

exports.deleteOrder = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { orderId } = req.params;

  const order = await orderRepository.orderById(orderId);

  if (!order) {
    return res.status(404).json({
      error: true,
      msg: `La orden con el id ${orderId} no se encontro en la base de datos`,
    });
  }

  const result = await orderRepository.deleteOrder(orderId);

  res.status(200).json(result);
});
