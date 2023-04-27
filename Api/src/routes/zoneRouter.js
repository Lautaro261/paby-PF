const { Router } = require("express");
const handlerZone = require("../handlers/handlerZone");

const zoneRouter = Router();

//// Rutas de Pisos
zoneRouter.get("/", handlerFloor.getFloors);
zoneRouter.get("/:id", handlerFloor.getFloorsById);
zoneRouter.post("/:id", handlerFloor.createNewFloor);
zoneRouter.put("/:id", handlerFloor.updateFloor);

module.exports = zoneRouter;
