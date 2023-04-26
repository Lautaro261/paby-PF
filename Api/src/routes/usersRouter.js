

//userRouter/:id/vehiculo  

//get general y post

//userRouter/:id/vehiculo/:id  

// get del vehico por id put 

// user/datos 
// vehiculo/datos

// user/Jorge/vehiculos/datos
 
const {Router} = require('express')
const HandlerGetUsers = require("../handlers/handlerGetUsers.js")

const usersRouter = Router();

usersRouter.get("/", HandlerGetUsers)
usersRouter.post("/",/* HANDLER USER*/)

usersRouter.get("vehicle",/* HANDLER VEHICLE */)
usersRouter.post("vehicle",/* HANDLER VEHICLE */)

usersRouter.get("vehicle/:id",/* HANDLER  VEHICLE BY ID*/)
usersRouter.put("vehicle/:id",/* HANDLER VEHICLE BY ID*/)  

module.exports= usersRouter