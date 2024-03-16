const userRepository = require("../repositories/userRepository");
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");

// add pagination and limit
exports.user_list = asyncHandler(async (req, res, next) => {
  const users = await userRepository.userList();

  res.status(200).json(users);
});

exports.userById = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId } = req.params;

  const user = await userRepository.userById(userId);

  if (!user) {
    return res
      .status(404)
      .json({ msg: `Ususario con id: ${userId} no existe` });
  }

  res.status(200).json(user);
});

exports.createUser = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newUser = await userRepository.createUser(req.body);

  res.status(201).json(newUser);
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId } = req.params;

  const userFromDb = await userRepository.userById(userId);

  if (!userFromDb) {
    return res.status(404).json({
      error: true,
      msg: `El usuario con el id: ${userId} no fue encontrado`,
    });
  }

  const result = await userRepository.updateUser(req.body, userId);

  res.status(200).json(result);
});

exports.user_delete = asyncHandler(async (req, res, next) => {
  res.send(
    `NOT IMPLEMENTED: User delete, user controller, user id: ${req.params.userId}`
  );
});
