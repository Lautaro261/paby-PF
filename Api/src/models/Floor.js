const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "floor",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      car_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      motorcycle_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
