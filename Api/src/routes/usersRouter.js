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
const handlerPostVehicle = require ("../handlers/handlerPostVehicle.js")
const handlerPutVehicle = require("../handlers/handlerPutVehicle")
const usersRouter = Router();       // 3001/USERS/vehicle


usersRouter.get("/", handlerGetUsers) // 3001/USERS/ traer todo los usuarios
usersRouter.post("/",handlerPostUser) //3001/USERS/ creo un usuario 

usersRouter.get("/vehicle", handlerGetVehicle) //3001/users/allvehiculos
usersRouter.post("/vehicle", handlerPostVehicle)

usersRouter.get("/vehicle/:id",/* HANDLER  VEHICLE BY ID*/)
usersRouter.put("/vehicle/:license_plate_id", handlerPutVehicle)  


module.exports = usersRouter;
