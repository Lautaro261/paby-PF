const { Router } = require("express");
const handlerZone = require("../handlers/handlerZone");

const zoneRouter = Router();

//// Rutas de Pisos
zoneRouter.get("/", handlerZone.getZonesWithFloors);
zoneRouter.get("/:id", handlerZone.getZonesByIdParking);
zoneRouter.post("/:id", handlerZone.createZonesInFloor);
zoneRouter.put("/:id", handlerZone.updateZones);

module.exports = zoneRouter;
