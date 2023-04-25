const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('prueba',{
        id:{
            type:DataTypes.STRING,
            unique: true,
            primaryKey: true
        },
        brand:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}

