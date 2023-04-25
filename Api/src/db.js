const {Sequelize} = require("sequelize")
require('dotenv').config();


const {
    DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;

 const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/paby`,{
    logging: false,
    native: false,
  });


  module.exports = {
    ...sequelize.models, 
    conn: sequelize,     
  };
