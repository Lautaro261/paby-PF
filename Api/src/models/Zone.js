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
        type: DataTypes.ENUM("Disponible", "Ocupada", "Reservada"),
        allowNull: false,
        defaultValue: "Disponible",
      },
      zone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vehicle_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
