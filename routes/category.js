const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("response from categories get");
});

router.get("/:categoryId", (req, res) => {
  res.send(`response from category get by id: ${req.params.categoryId}`);
});

router.post("/", (req, res) => {
  res.send("response from category post");
});

router.put("/", (req, res) => {
  res.send("response from category put");
});

router.delete("/:categoryId", (req, res) => {
  res.send(`response from category delete ${req.params.categoryId}`);
});

module.exports = router;
