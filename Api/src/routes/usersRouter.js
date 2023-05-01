const { Router } = require("express");

const handlerPostUser = require("../handlers/handlerPostUser");
const handlerGetUsers = require("../handlers/handlerGetUsers.js");
const handlerGetVehicle = require("../handlers/handlerGetVehicle.js");
const handlerPostVehicle = require("../handlers/handlerPostVehicle.js");
const handlerPutVehicle = require("../handlers/handlerPutVehicle");
const handlerGetVehicleId = require("../handlers/handlerGetVehicleId.js");
const handlerGetVehiclesIdUser = require("../handlers/handlerGetVehiclesIdUser");
const handlerGetUserId = require("../handlers/handlerGetUserId");
const handlerGetVehicleByBrand = require("../handlers/handlerGetVehicleByBrand");

const usersRouter = Router(); // 3001/USERS/vehicle

//PARA EL ADMIN
usersRouter.get("/", handlerGetUsers); // 3001/USERS/ traer todo los usuarios
usersRouter.get("/vehicle", handlerGetVehicle); //3001/users/allvehiculosUser
usersRouter.get("/:idUser", handlerGetUserId); //3001/users/5

// PARA EL USUARIO
usersRouter.post("/", handlerPostUser); //3001/USERS/ creo un usuario
usersRouter.post("/:userId/vehicle", handlerPostVehicle);

usersRouter.get("/:idUser/vehicles", handlerGetVehiclesIdUser); //3001/users/:idUser/allvehiculosUser
usersRouter.get("/vehicle/:license_plate_id", handlerGetVehicleId);
usersRouter.get("/vehicle/search/:car_brand", handlerGetVehicleByBrand);

usersRouter.put("/vehicle/:license_plate_id", handlerPutVehicle);

module.exports = usersRouter;
