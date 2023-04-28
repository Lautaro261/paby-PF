const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('user',{
        id:{
            type: DataTypes.INTEGER,
            
            primaryKey: true,
            allowNull: false,
        },
        identificacion:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        name:{  
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        country:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        city:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        address:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        neighborhood:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        photo:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    { timestamps: false })
}

