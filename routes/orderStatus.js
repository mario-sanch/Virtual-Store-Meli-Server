const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const orderStatusController = require("../controllers/orderStatusController");

router.get("/", orderStatusController.orderStatus_list);

router.get(
  "/:orderStatusId",
  [
    check(
      "orderStatusId",
      "El identificador no se encuentra en un formato correcto"
    ).isInt(),
  ],
  orderStatusController.orderStatusById
);

router.post(
  "/",
  [check("StatusName", "El nombre se encuentra vacio").not().isEmpty()],
  orderStatusController.orderStatus_create
);

router.put(
  "/:orderStatusId",
  [
    check("StatusName", "El nombre se encuentra vacio").not().isEmpty(),
    check(
      "orderStatusId",
      "El identificador no se encuentra en un formato correcto"
    ).isInt(),
  ],
  orderStatusController.orderStatus_update
);

router.delete(
  "/:orderStatusId",
  [
    check(
      "orderStatusId",
      "El identificador no se encuentra en un formato correcto"
    ).isInt(),
  ],
  orderStatusController.orderStatus_delete
);

module.exports = router;
