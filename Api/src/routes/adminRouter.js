const { Router } = require("express");
const verifyToken = require("../utils/verifyToken");
const handlerGetUsers = require("../handlers/admin/handlerGetUsers.js");
const handlerGetVehicle = require("../handlers/admin/handlerGetVehicle.js");
const handlerLogin = require("../handlers/admin/handlerLogin.js");
const handlerGetUserById = require("../handlers/admin/handlerGetUserById");
const handlerPrueba = require("../handlers/admin/handlerPrueba.js");
const {
  handlerGetAllParkings,
  handlerGetParkingById,
} = require("../handlers/admin/handlerGetParkings");
const handlerCreateParking = require("../handlers/admin/handlerPostParking");
const handlerUpdateParking = require("../handlers/admin/handlerPutParking");

const adminRouter = Router();

adminRouter.post("/login", handlerLogin);

adminRouter.get("/allusers", verifyToken, handlerGetUsers);
adminRouter.get("/allvehicles", verifyToken, handlerGetVehicle);
adminRouter.get("/user/:idUser", verifyToken, handlerGetUserById);
adminRouter.get("/parking/alls", verifyToken, handlerGetAllParkings);
adminRouter.get("/parking/:id", verifyToken, handlerGetParkingById);
adminRouter.post("/parking/create", verifyToken, handlerCreateParking);
adminRouter.put("/parking/:id", verifyToken, handlerUpdateParking);

module.exports = adminRouter;
