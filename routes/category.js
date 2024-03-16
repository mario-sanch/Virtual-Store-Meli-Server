const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.categoryList);

router.get(
  "/:categoryId",
  [
    check(
      "categoryId",
      "El identificador de la categoria se encuentra en un formato no valido"
    )
      .isInt()
      .escape(),
  ],
  categoryController.categoryById
);

router.post(
  "/",
  [
    check("Name", "El nombre de la categoria no puede estar vacio")
      .not()
      .isEmpty(),
    check("Enable", "Debe especificar si la categoria esta disponible")
      .not()
      .isEmpty(),
    check(
      "Enable",
      "El valor que guarda la disponibilidad de la categoria esta en un formato incorrecto"
    ).isBoolean(),
  ],
  categoryController.categoryCreate
);

router.put(
  "/:categoryId",
  [
    check(
      "categoryId",
      "El identificador de la categoria no se encuentra en un formato correcto"
    )
      .isInt()
      .escape(),
  ],
  categoryController.categoryUpdate
);

router.delete(
  "/:categoryId",
  [
    check(
      "categoryId",
      "El identificador de la categoria se encuentra en un forrmato no valido"
    )
      .isInt()
      .escape(),
  ],
  categoryController.deleteCategory
);

module.exports = router;
