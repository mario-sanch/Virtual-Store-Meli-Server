const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const orderController = require("../controllers/orderController");

//add pagination and limit
router.get("/", orderController.orderList);

router.get(
  "/byUserId/:userId",
  [
    check(
      "userId",
      "El identificador del usuario no se encuentra en un formato valido"
    ).isNumeric(),
  ],
  orderController.ordersByUserId
);

router.get(
  "/byStatus/:statusId",
  [
    check(
      "statusId",
      "El formato del identificador no esta en un formato correcto"
    ).isNumeric(),
  ],
  orderController.ordersByStatusId
);

router.get("/byDates/:from-:to", (req, res) => {
  res.send(
    `response from orders by date range from: ${req.params.from}- to: ${req.params.to}`
  );
});

router.post(
  "/",
  [
    /*check(
      "OrderDate",
      "La fecha de la orden no se encuentra en un formato correcto"
    ).isDate(),*/
    check("OrderDate", "La fecha se encuentra vacia").not().isEmpty(),
    check(
      "TotalPrice",
      "El precio de la orden no se encuentra en un formato correcto"
    ).isNumeric(),
    check(
      "UserId",
      "El identificador del usuario no se encuentra en un formato valido"
    ).isNumeric(),
    check(
      "StatusId",
      "El identificador del estatus de la orden no se encuentra en un formato valido"
    ).isNumeric(),
  ],
  orderController.createOrder
);

router.put(
  "/:orderId",
  [
    check(
      "orderId",
      "El identificador de la orden no se encuentra en un formato valido"
    ).isNumeric(),
    check("OrderDate", "La fecha se encuentra vacia").not().isEmpty(),
    check(
      "TotalPrice",
      "El precio de la orden no se encuentra en un formato correcto"
    ).isNumeric(),
    check(
      "UserId",
      "El identificador del usuario no se encuentra en un formato valido"
    ).isNumeric(),
    check(
      "StatusId",
      "El identificador del estatus de la orden no se encuentra en un formato valido"
    ).isNumeric(),
  ],
  orderController.updateOrder
);

router.delete(
  "/:orderId",
  [
    check(
      "orderId",
      "El identificador de la orden no se encuentra en un formato valido"
    ).isInt(),
  ],
  orderController.deleteOrder
);

module.exports = router;
