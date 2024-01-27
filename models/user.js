module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
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
    },
    {
      tableName: "users",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Order, {
      foreignKey: {
        name: "UserId",
        allowNull: false,
      },
      onDelete: "cascade",
    });
  };

  return User;
};
