const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const productController = require("../controllers/productController");

router.get("/", productController.product_list);

router.get("/:productId", productController.product_byId);

router.post(
  "/",
  [
    check("Name", "El nombre del producto es requerido").not().isEmpty(),
    check("Enable", "Es necesario indicar si el producto esta disponoble o no")
      .not()
      .isEmpty(),
    check(
      "Enable",
      "El valor de enable no esta en un formato correcto"
    ).isBoolean(),
  ],
  productController.product_create
);

router.put("/", productController.product_update);

router.delete("/:productId", productController.product_delete);

module.exports = router;
