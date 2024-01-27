const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.user_list);

router.get("/:userId", userController.user_byId);

router.post("/", userController.user_create);

router.put("/", userController.user_update);

router.delete("/:userId", userController.user_delete);

module.exports = router;
