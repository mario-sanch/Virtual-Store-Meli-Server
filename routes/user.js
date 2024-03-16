const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { check } = require("express-validator");

router.get("/", userController.user_list);

router.get(
  "/:userId",
  [
    check(
      "userId",
      "El identificador del usuario se encuentra en un estado no valido"
    ).isInt(),
  ],
  userController.userById
);

router.post(
  "/",
  [
    check("Email", "El correo se encuentra vacio").not().isEmpty(),
    check("Email", "El correo se encuentra en un formato no valido").isEmail(),
    check("Password", "La contrasenia se encuentra vacia").not().isEmpty(),
    check("Telephone", "El telefono se encuentra vacio").not().isEmpty(),
  ],
  userController.createUser
);

router.put(
  "/:userId",
  [
    check(
      "userId",
      "El identificador del usuario se encuentra en un formato incorrecto"
    ).isInt(),
  ],
  userController.updateUser
);

router.delete("/:userId", userController.user_delete);

module.exports = router;
