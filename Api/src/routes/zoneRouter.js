const { Router } = require("express");
const {
  handlerGetAllZonesWithFloors,
  handlerGetZonesByParkingId,
} = require("../handlers/zones/handlerGetZone");
const handlerCreateZones = require("../handlers/zones/handlerPostZone");
const handlerUpdateZone = require("../handlers/zones/handlerPutZone");

const parkingRouter = require("../routes/parkingRouter");
const zoneRouter = Router();

//// Rutas de Zonas
zoneRouter.get("/alls", handlerGetAllZonesWithFloors);
parkingRouter.get("/:id/zones", handlerGetZonesByParkingId);
parkingRouter.post("/floor/:id/createzones", handlerCreateZones);
parkingRouter.put("/zone/:id/edit", handlerUpdateZone);

module.exports = zoneRouter;
