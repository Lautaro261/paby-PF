//userRouter/:id/vehiculo

//get general y post

//userRouter/:id/vehiculo/:id

// get del vehico por id put

// user/datos
// vehiculo/datos

// user/Jorge/vehiculos/datos
 
const {Router} = require('express')


const usersRouter = Router();       // 3001/USERS/vehicle

usersRouter.get("/",/* HANDLER USER*/)
usersRouter.post("/",/* HANDLER USER*/)

usersRouter.get("vehicle",/* HANDLER VEHICLE */)
usersRouter.post("vehicle",/* HANDLER VEHICLE */)

usersRouter.get("vehicle/:id",/* HANDLER  VEHICLE BY ID*/)
usersRouter.put("vehicle/:id",/* HANDLER VEHICLE BY ID*/)  
