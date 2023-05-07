const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      sub: {
        type: DataTypes.TEXT,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        //allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      /* rol: {
        type: DataTypes.ENUM('admin', 'client'),
        defaultValue: 'client',
        allowNull: false
      }, */
      photo: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};