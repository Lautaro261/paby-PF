const { DataTypes } = require("sequelize");
const { Op } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "cart",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      cart_amount: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0,
      },
      cart_status: {
        type: DataTypes.ENUM("Por pagar", "Pagado", "Vacio"),
        defaultValue: "Vacio",
        allowNull: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      indexes: [
        // Crea un índice condicional que incluye solo los carritos con estado "Vacio" o "Por pagar"
        {
          name: "active_cart",
          fields: ["userSub", "cart_status"],
          where: {
            cart_status: { [Op.or]: ["Vacio", "Por pagar"] },
          },
          unique: true,
        },
      ],
    }
  );
};
