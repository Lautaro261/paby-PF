const { Router } = require("express");
const verifyToken = require('../utils/verifyToken');
const handlerGetUsers = require("../handlers/admin/handlerGetUsers.js");
const handlerGetVehicle = require("../handlers/admin/handlerGetVehicle.js");
const handlerLogin = require("../handlers/admin/handlerLogin.js");
//const handlerPrueba = require("../handlers/admin/handlerPrueba.js");

const adminRouter = Router();


adminRouter.post("/login", handlerLogin );

adminRouter.get("/allusers", verifyToken ,handlerGetUsers); // 3001/USERS/ traer todo los usuarios
adminRouter.get("/allvehicles", verifyToken ,handlerGetVehicle); //3001/users/allvehiculosUser
//adminRouter.post("/prueba",verifyToken, handlerPrueba);

module.exports = adminRouter;
