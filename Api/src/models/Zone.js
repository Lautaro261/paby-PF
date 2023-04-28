const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "zone",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
        allowNull: false,
      },
      zone_status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vehicle_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
