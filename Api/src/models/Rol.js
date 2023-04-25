const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('rol',{ 
        id:{
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    { timestamps: false }) 
}