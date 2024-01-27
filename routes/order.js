const express = require("express");
const router = express.Router();

router.get("/byUserId/:userId", (req, res) => {
  res.send(`response from orders by user id ${req.params.userId}`);
});

router.get("/byStatus/:status", (req, res) => {
  res.send(`response from orders by status ${req.params.status}`);
});

router.get("/byDates/:from-:to", (req, res) => {
  res.send(
    `response from orders by date range from: ${req.params.from}- to: ${req.params.to}`
  );
});

router.post("/", (req, res) => {
  res.send("response from orders post");
});

router.put("/", (req, res) => {
  res.send("response from orders put");
});

router.delete("/:orderId", (req, res) => {
  res.send(`response from orders delete ${req.params.orderId}`);
});

module.exports = router;
