const { Router } = require("express");
const handlerFloor = require("../handlers/handlerFloor");

const floorRouter = Router();

//// Rutas de Pisos
floorRouter.get("/", handlerFloor.getFloors);
floorRouter.get("/:id", handlerFloor.getFloorsById);
floorRouter.post("/:id", handlerFloor.createNewFloor);
floorRouter.put("/:id", handlerFloor.updateFloor);


module.exports = floorRouter;

