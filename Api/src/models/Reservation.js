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
        type: DataTypes.TIME,
        allowNull: false,
      },
      departure_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      instant_photo: {
        type: DataTypes.TEXT,
        allowNull: true,
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
      payment_status: {
        type: DataTypes.ENUM("pending", "rejected", "approved"),
        defaultValue: "pending",
        allowNull: false,
      },
      reservation_status: {
        type: DataTypes.ENUM(
          "En curso",
          "Programada",
          "Finalizada",
          "Pagada",
          "Pago rechazado",
          "Cancelada",
          "En verificación"
        ),
        defaultValue: "En verificación",
        allowNull: true,
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      payment_link: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      payment_transaction_id: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      preference_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["zoneId", "admission_time", "departure_time"],
        },
      ],
      timestamps: false,
    }
  );
};
