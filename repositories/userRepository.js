const db = require("../models/index");

exports.userList = async () => {
  const users = await db.User.findAll();

  return users;
};

exports.userById = async (userId) => {
  const user = db.User.findByPk(userId);

  return user;
};

exports.createUser = async (user) => {
  const newUser = await db.User.create(user);

  return newUser;
};

exports.updateUser = async (user, userId) => {
  const result = db.User.update(user, { where: { UserId: userId } });

  return result;
};
