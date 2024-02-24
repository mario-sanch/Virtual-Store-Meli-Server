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
    check("Name", "El nombre de la categoria no puede esta vacio")
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

router.put("/", (req, res) => {
  res.send("response from category put");
});

router.delete("/:categoryId", (req, res) => {
  res.send(`response from category delete ${req.params.categoryId}`);
});

module.exports = router;
