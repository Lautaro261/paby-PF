const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "reservation",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      admission_time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      departure_time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instant_photo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      full_reserve_value: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      payment_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      reservation_status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
