const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Cart',{    
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        cart_amount:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        cart_status:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}
