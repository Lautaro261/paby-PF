const { Router } = require("express");
const {
  handlerGetAllFloors,
  handlerGetFloorsByParkingId,
} = require("../handlers/floor/handlerGetFloor");
const handlerCreateFloor = require("../handlers/floor/handlerPostFloor");
const handlerUpdateFloorById = require("../handlers/floor/handlerPutFloor");

const parkingRouter = require("../routes/parkingRouter");
const floorRouter = Router();

//// Rutas de Pisos

floorRouter.get("/alls", handlerGetAllFloors);
parkingRouter.get("/:id/floors", handlerGetFloorsByParkingId);
parkingRouter.post("/:id/createfloor", handlerCreateFloor);
parkingRouter.put("/editfloor/:id", handlerUpdateFloorById);

module.exports = floorRouter;
