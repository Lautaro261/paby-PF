const { Router } = require("express");
const verifyToken = require('../utils/verifyToken');
const handlerGetUsers = require("../handlers/admin/handlerGetUsers.js");
const handlerGetVehicle = require("../handlers/admin/handlerGetVehicle.js");
const handlerLogin = require("../handlers/admin/handlerLogin.js");
const handlerGetUserById = require ("../handlers/admin/handlerGetUserById");
const handlerDeleteUser = require("../handlers/admin/handlerDeleteUser");
//const handlerPrueba = require("../handlers/admin/handlerPrueba.js");

const adminRouter = Router();


adminRouter.post("/login", handlerLogin );

adminRouter.get("/allusers", verifyToken ,handlerGetUsers); 
adminRouter.get("/allvehicles", verifyToken ,handlerGetVehicle); 
adminRouter.get("/user/:idUser", verifyToken, handlerGetUserById);

adminRouter.put("/delete/user/", handlerDeleteUser)
//adminRouter.post("/prueba",verifyToken, handlerPrueba);

module.exports = adminRouter;
