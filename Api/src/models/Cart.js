const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('cart',{    
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        cart_amount:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        cart_status:{
            type: DataTypes.ENUM(
                "Por pagar",
                "Pagado",
                "Vacio"),
            defaultValue: "Vacio",
            allowNull: true
        }
    })
}
