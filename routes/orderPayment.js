const express = require("express");
const router = express.Router();
const orderPaymentController = require("../controllers/orderPaymentController");

router.get("/", orderPaymentController.orderPayment_list);

router.get("/:orderPaymentId", orderPaymentController.orderPayment_byId);

router.get(
  "/byOrderId/:orderId",
  orderPaymentController.orderPayment_byOrderId
);

router.post("/", orderPaymentController.orderPayment_create);

router.put("/", orderPaymentController.orderPayment_update);

router.delete("/:orderPaymentId", orderPaymentController.orderPayment_delete);

module.exports = router;
