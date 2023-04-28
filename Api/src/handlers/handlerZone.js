// Controlador de los pisos del parqueadero
const controllerZone = require("../controllers/controllerZone");

exports.createZonesInFloor = controllerZone.createZones;
exports.getZonesWithFloors = controllerZone.getAllZonesWithFloors;
exports.getZonesByIdParking = controllerZone.getZonesByParkingId;
exports.updateZones = controllerZone.updateZone;
