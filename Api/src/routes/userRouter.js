const { Router } = require("express");

const handlerPostUser = require("../handlers/user/handlerPostUser");
const handlerPostVehicle = require("../handlers/vehicle/handlerPostVehicle.js");
const handlerPutVehicle = require("../handlers/vehicle/handlerPutVehicle");
const handlerGetVehicleId = require("../handlers/vehicle/handlerGetVehicleId.js");
const handlerGetVehiclesIdUser = require("../handlers/vehicle/handlerGetVehiclesIdUser");
const handlerGetUserId = require("../handlers/user/handlerGetUserId");
const handlerGetVehicleByBrand = require("../handlers/vehicle/handlerGetVehicleByBrand");
const handlerPutProfile = require('../handlers/user/handlerPutProfile');

const userRouter = Router(); 




userRouter.post("/create", handlerPostUser); 
userRouter.post("/vehicle/create", handlerPostVehicle); 

userRouter.get("/:idUser", handlerGetUserId); 
userRouter.get("/:sub/vehicles", handlerGetVehiclesIdUser); 
userRouter.get("/vehicle/:license_plate_id", handlerGetVehicleId);
userRouter.get("/vehicle/search/:car_brand", handlerGetVehicleByBrand);

userRouter.put("/vehicle/edit/:license_plate_id", handlerPutVehicle);
userRouter.put("/profile/edit/", handlerPutProfile);

module.exports = userRouter;
