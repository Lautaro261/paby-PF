const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "vehicle",
    {
      license_plate_id: {
        type: DataTypes.STRING(7),
        primaryKey: true,
        unique: false,
        validate: {
          len: [1, 7], // validación que asegura que la placa tenga entre 1 y 7 caracteres
        },
      },
      vehicle_tipe: {
        type: DataTypes.ENUM("Automovil", "Motocicleta"),
        allowNull: false,
      },
      type_of_service: {
        type: DataTypes.ENUM("Particular", "Publico"),
        allowNull: false,
      },
      car_brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      car_model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      car_model_year: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      car_color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      license_plate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      photo: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
