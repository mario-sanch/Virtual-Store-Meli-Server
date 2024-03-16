const orderStatusRepository = require("../repositories/orderStatusRepository");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");

exports.orderStatus_list = asyncHandler(async (req, res, next) => {
  const orderStatusList = await orderStatusRepository.orderStatusList();

  res.status(200).json(orderStatusList);
});

exports.orderStatusById = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { orderStatusId } = req.params;

  const orderStatus = await orderStatusRepository.orderStatusById(
    orderStatusId
  );

  if (!orderStatus) {
    return res
      .status(404)
      .json({
        error: true,
        msg: `El status con id: ${orderStatusId} no se encuentra en la base de datos`,
      });
  }

  res.status(200).json(orderStatus);
});

exports.orderStatus_create = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newOrderStatus = orderStatusRepository.createOrderStatus(req.body);

  res.status(200).json(newOrderStatus);
});

exports.orderStatus_update = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { orderStatusId } = req.params;

  const foundOrderStatus = await orderStatusRepository.orderStatusById(
    orderStatusId
  );

  if (!foundOrderStatus) {
    return res.status(404).json({
      error: true,
      msg: `No se encontro registro en la base de datos con el id: ${orderStatusId}`,
    });
  }

  const result = await orderStatusRepository.updateOrderStatus(
    req.body,
    orderStatusId
  );

  res.status(200).json(result);
});

exports.orderStatus_delete = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { orderStatusId } = req.params;

  const orderStatusToDelete = await orderStatusRepository.orderStatusById(
    orderStatusId
  );

  if (!orderStatusToDelete) {
    return res.status(404).json({
      error: true,
      msg: "Orden Status no encontrada en la base de datos",
    });
  }

  const result = await orderStatusRepository.deleteOrderStatus(orderStatusId);

  res.status(200).json(result);
});
