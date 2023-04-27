//userRouter/:id/vehiculo

//get general y post

//userRouter/:id/vehiculo/:id

// get del vehico por id put

// user/datos
// vehiculo/datos
const handlerPostUser = require('../handlers/handlerPostUser');
// user/Jorge/vehiculos/datos 
const {Router} = require('express')
const handlerGetUsers = require("../handlers/handlerGetUsers.js")
const handlerGetVehicle = require ("../handlers/handlerGetVehicle.js")



const usersRouter = Router();       // 3001/USERS/vehicle


usersRouter.get("/", handlerGetUsers) // 3001/USERS/ traer todo los usuarios
usersRouter.post("/",handlerPostUser) //3001/USERS/ creo un usuario 

//usersRouter.get("/vehicle", handlerGetVehicle) //3001/users/allvehiculos
usersRouter.post("/vehicle",/* HANDLER VEHICLE */)

usersRouter.get("/vehicle/:id",/* HANDLER  VEHICLE BY ID*/)
usersRouter.put("/vehicle/:id",/* HANDLER VEHICLE BY ID*/)  


module.exports = usersRouter;
