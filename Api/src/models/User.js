const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('user',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        identificacion:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name:{  
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        country:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        city:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        neighborhood:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { timestamps: false })
}

