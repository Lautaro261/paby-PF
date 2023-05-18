const { Router } = require("express");

const handlerGetUserId = require("../handlers/user/handlerGetUserId");
const handlerGetVehicleId = require("../handlers/vehicle/handlerGetVehicleId.js");
const handlerGetVehiclesIdUser = require("../handlers/vehicle/handlerGetVehiclesIdUser");
const handlerGetVehicleByBrand = require("../handlers/vehicle/handlerGetVehicleByBrand");
const handlerPostUser = require("../handlers/user/handlerPostUser");
const handlerPostVehicle = require("../handlers/vehicle/handlerPostVehicle.js");
const handlerPutProfile = require("../handlers/user/handlerPutProfile");
const handlerPutVehicle = require("../handlers/vehicle/handlerPutVehicle");
const handlerLoginClient = require("../handlers/user/handlerLoginClient");

const userRouter = Router();

userRouter.get("/:idUser", handlerGetUserId);
userRouter.get("/:sub/vehicles", handlerGetVehiclesIdUser);
userRouter.get("/vehicle/:license_plate_id", handlerGetVehicleId);
userRouter.get("/vehicle/search/:car_brand", handlerGetVehicleByBrand);

userRouter.post("/create", handlerPostUser);
userRouter.post("/login", handlerLoginClient);
userRouter.post("/vehicle/create", handlerPostVehicle);

userRouter.put("/vehicle/edit/:license_plate_id", handlerPutVehicle);
userRouter.put("/profile/edit/", handlerPutProfile);

module.exports = userRouter;
