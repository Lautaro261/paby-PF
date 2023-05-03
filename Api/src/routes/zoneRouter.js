const { Router } = require("express");
const {
  handlerGetAllZonesWithFloors,
  handlerGetZonesByParkingId,
} = require("../handlers/handlerGetZone");
const handlerCreateZones = require("../handlers/handlerPostZone");
const handlerUpdateZone = require("../handlers/handlerPutZone");

const parkingRouter = require("../routes/parkingRouter");
const zoneRouter = Router();

//// Rutas de Pisos
zoneRouter.get("/alls", handlerGetAllZonesWithFloors);
parkingRouter.get("/:id/zones", handlerGetZonesByParkingId);
parkingRouter.post("/floor/:id/createzones", handlerCreateZones);
parkingRouter.put("/zone/:id/edit", handlerUpdateZone);

module.exports = zoneRouter;
