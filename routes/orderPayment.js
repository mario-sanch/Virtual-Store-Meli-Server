const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const orderPaymentController = require("../controllers/orderPaymentController");

router.get("/", orderPaymentController.orderPayment_list);

router.get(
  "/:orderPaymentId",
  [
    check(
      "orderPaymentId",
      "El identificador del pago no se encuentra en un formato valido"
    ).isInt(),
  ],
  orderPaymentController.orderPayment_byId
);

router.get(
  "/byOrderId/:orderId",
  [
    check(
      "orderId",
      "El identificador del pago no se encuentra en un formato valido"
    ).isInt(),
  ],
  orderPaymentController.orderPayment_byOrderId
);

router.post(
  "/",
  [
    /*
    check(
      "PaymentDate",
      "La fecha del pago no esta en un formato correcto"
    ).isDate(),*/
    check(
      "AmountPaid",
      "La cantidad del pago no se encuentra en un formato correcto"
    ).isNumeric(),
    check(
      "OrderId",
      "El identificador de la orden no se encuentra en un formato correcto"
    ).isInt(),
  ],
  orderPaymentController.orderPayment_create
);

router.put(
  "/:orderPaymentId",
  [
    /*
    check(
      "PaymentDate",
      "La fecha del pago no esta en un formato correcto"
    ).isDate(),*/
    check(
      "orderPaymentId",
      "El identificador del pago no se encuentra en un formato valido"
    ).isInt(),
    check(
      "AmountPaid",
      "La cantidad del pago no se encuentra en un formato correcto"
    ).isNumeric(),
    check(
      "OrderId",
      "El identificador de la orden no se encuentra en un formato correcto"
    ).isInt(),
  ],
  orderPaymentController.orderPayment_update
);

router.delete(
  "/:orderPaymentId",
  [
    check(
      "orderPaymentId",
      "El identificador del pago no se encuentra en un formato valido"
    ).isInt(),
  ],
  orderPaymentController.orderPayment_delete
);

module.exports = router;
