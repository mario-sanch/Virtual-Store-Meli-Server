const User = require("../models/user");
const asyncHandler = require("express-async-handler");

exports.user_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED user list - user controller");
});

exports.user_byId = asyncHandler(async (req, res, next) => {
  res.send(
    `NOT IMPLEMENTED: User by Id, user controller - user id: ${req.params.userId}`
  );
});

exports.user_create = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: User create, user controller`);
});

exports.user_update = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: User update, user controller");
});

exports.user_delete = asyncHandler(async (req, res, next) => {
  res.send(
    `NOT IMPLEMENTED: User delete, user controller, user id: ${req.params.userId}`
  );
});
