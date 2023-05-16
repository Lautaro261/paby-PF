const { Router } = require("express");
// VERIFY TOKEN
const verifyToken = require("../utils/verifyToken");

/////////// HANDLERS ////////////

// USUARIOS
const handlerGetUsers = require("../handlers/admin/handlerGetUsers.js");
// VEHICULOS
const handlerGetVehicle = require("../handlers/admin/handlerGetVehicle.js");
const handlerLogin = require("../handlers/admin/handlerLogin.js");
const handlerGetUserById = require("../handlers/admin/handlerGetUserById");
// PARQUEADEROS
const {
  handlerGetAllParkings,
  handlerGetParkingById,
} = require("../handlers/admin/handlerGetParkings");
const handlerCreateParking = require("../handlers/admin/handlerPostParking");
const handlerUpdateParking = require("../handlers/admin/handlerPutParking");

const adminRouter = Router();

/////////// ROUTES ////////////

adminRouter.post("/login", handlerLogin);

// USUARIOS
adminRouter.get("/allusers", verifyToken, handlerGetUsers);
adminRouter.get("/user/:idUser", verifyToken, handlerGetUserById);
// VEHICULOS
adminRouter.get("/allvehicles", verifyToken, handlerGetVehicle);
// PARQUEADEROS
adminRouter.get("/parking/alls", verifyToken, handlerGetAllParkings);
adminRouter.get("/parking/:id", verifyToken, handlerGetParkingById);
adminRouter.post("/parking/create", verifyToken, handlerCreateParking);
adminRouter.put("/parking/:id", verifyToken, handlerUpdateParking);

module.exports = adminRouter;
