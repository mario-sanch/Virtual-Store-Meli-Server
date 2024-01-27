const express = require("express");
const router = express.Router();
const orderStatusController = require("../controllers/orderStatusController");

router.get("/", orderStatusController.orderStatus_list);

router.post("/", orderStatusController.orderStatus_create);

router.put("/", orderStatusController.orderStatus_update);

router.delete("/:orderStatusId", orderStatusController.orderStatus_delete);

module.exports = router;
