const { Router } = require("express");
const {
  handlerGetAllFloors,
  handlerGetFloorsByParkingId,
} = require("../handlers/handlerFloor");

const floorRouter = Router();

//// Rutas de Pisos
floorRouter.get("/", handlerGetAllFloors);
floorRouter.get("/:id", handlerGetFloorsByParkingId);
// floorRouter.post("/:id", handlerFloor.createNewFloor);
// floorRouter.put("/:id", handlerFloor.updateFloor);

module.exports = floorRouter;
