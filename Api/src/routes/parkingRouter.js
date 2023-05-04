const { Router } = require("express");
const {
  handlerGetAllParkings,
  handlerGetParkingById,
} = require("../handlers/handlerGetParkings");
const handlerCreateParking = require("../handlers/handlerPostParking");
const handlerUpdateParking = require("../handlers/handlerPutParking");

const parkingRouter = Router();

//// Rutas de Parqueadero
parkingRouter.get("/alls", handlerGetAllParkings);
parkingRouter.get("/:id", handlerGetParkingById);
parkingRouter.post("/create", handlerCreateParking);
parkingRouter.put("/:id/edit", handlerUpdateParking);

module.exports = parkingRouter;
