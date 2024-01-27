const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.product_list);

router.get("/:productId", productController.product_byId);

router.post("/", productController.product_create);

router.put("/", productController.product_update);

router.delete("/:productId", productController.product_delete);

module.exports = router;
