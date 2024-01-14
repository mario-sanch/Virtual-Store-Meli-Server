module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("User", {
    UserId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return user;
};
