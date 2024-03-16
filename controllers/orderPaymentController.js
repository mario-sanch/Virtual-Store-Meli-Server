const orderPaymentRepository = require("../repositories/orderPaymentRepository");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");

exports.orderPayment_list = asyncHandler(async (req, res, next) => {
  try {
    const payments = await orderPaymentRepository.orderPaymentList();

    res.status(200).json(payments);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

exports.orderPayment_byId = asyncHandler(async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const orderPaymentId = req.params.orderPaymentId;

    const orderPayment = await orderPaymentRepository.orderPaymentById(
      orderPaymentId
    );

    res.status(200).json(orderPayment);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

exports.orderPayment_byOrderId = asyncHandler(async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const orderId = req.params.orderId;

    const payment = await orderPaymentRepository.orderPaymentByOrderId(orderId);

    res.status(200).json(payment);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

exports.orderPayment_create = asyncHandler(async (req, res, next) => {
  try {
    var errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newPayment = await orderPaymentRepository.createOrderPayment(
      req.body
    );

    return res.status(200).json(newPayment);
    res.status(201).json(newPayment);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

exports.orderPayment_update = asyncHandler(async (req, res, next) => {
  var errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const paymentId = req.params.orderPaymentId;

  const result = await orderPaymentRepository.updateOrderPayment(
    req.body,
    paymentId
  );

  res.status(200).json(result);
});

exports.orderPayment_delete = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const paymentId = req.params.orderPaymentId;

  const orderPayment = await orderPaymentRepository.orderPaymentById(paymentId);

  if (!orderPayment) {
    return res
      .status(404)
      .json({ msg: `No se encontro el pago con el id: ${paymentId}` });
  }

  const result = await orderPaymentRepository.deleteOrderPayment(orderPayment);

  res.status(200).json(result);
});
