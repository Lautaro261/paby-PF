const { Router } = require("express");
const {
  handlerGetAllParkings,
  handlerGetParkingById,
} = require("../handlers/handlerGetParkings");
const handlerCreateParking = require("../handlers/handlerPostParking");
const handlerUpdateParking = require("../handlers/handlerPutParking");

const parkingRouter = Router();

//// Rutas de Parqueadero
parkingRouter.get("/", handlerGetAllParkings);
parkingRouter.get("/:id", handlerGetParkingById);
parkingRouter.post("/", handlerCreateParking);
parkingRouter.put("/:id", handlerUpdateParking);

module.exports = parkingRouter;
