const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const productController = require("../controllers/productController");

router.get("/", productController.product_list);

router.get(
  "/byCategory/:categoryId",
  [check("categoryId").isInt().escape()],
  productController.productsByCategory
);

router.get(
  "/byProductId/:productId",
  [
    check(
      "productId",
      "El identificador del producto no se encuentra en un formato valido"
    )
      .isInt()
      .escape(),
  ],
  productController.product_byId
);

router.post(
  "/",
  [
    check("Name", "El nombre del producto es requerido").not().isEmpty(),
    check("Enable", "El indicador de disponibilidad del producto es requerido")
      .not()
      .isEmpty(),
    check("Enable", "El valor no esta en un formato correcto").isBoolean(),
  ],
  productController.product_create
);

router.put(
  "/:productId",
  [
    check(
      "productId",
      "El identificador no se encuentra en un formato correcto"
    ).isInt(),
    check("Name", "El nombre del producto es requerido").not().isEmpty(),
    check("Enable", "El indicador de disponibilidad del producto es requerido")
      .not()
      .isEmpty(),
    check(
      "Enable",
      "El valor no se encuentra en un formato correcto"
    ).isBoolean(),
  ],
  productController.product_update
);

router.delete(
  "/:productId",
  [
    check(
      "productId",
      "El identificador no se encuentra en un formato correcto"
    ).isInt(),
  ],
  productController.product_delete
);

router.post(
  "/productByCategory/:productId/:categoryId",
  [
    check(
      "productId",
      "El identificador del producto se encuentra en un formato no valido"
    ).isInt(),
    check(
      "categoryId",
      "El identificador de la categoria se encuentra en un formato no valido"
    ).isInt(),
  ],
  productController.createProductByCategory
);

router.delete(
  "/productByCategory/:productId/:categoryId",
  [
    check(
      "productId",
      "El identificador del producto no se encuentra en un formato valido"
    ).isInt(),
    check(
      "categoryId",
      "El identificador de la categoria no se encuentra en un formato valido"
    ).isInt(),
  ],
  productController.deleteProductByCategory
);

module.exports = router;
