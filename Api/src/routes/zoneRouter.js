const { Router } = require("express");
const handlerZone = require("../handlers/handlerZone");

const zoneRouter = Router();

//// Rutas de Pisos
zoneRouter.get("/floors", handlerZone.getZonesOfFloor);
zoneRouter.get("/", handlerZone.getZonesWithFloors);
// zoneRouter.get("/:id", handlerZone.getFloorsById);
zoneRouter.post("/:id", handlerZone.createZonesInFloor);
// zoneRouter.put("/:id", handlerZone.updateFloor);

module.exports = zoneRouter;
