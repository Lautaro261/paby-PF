// Controlador de los pisos del parqueadero
const controllerZone = require("../controllers/controllerZone");

exports.getZonesOfFloor = controllerZone.getZonesByFloorId;
exports.getZonesWithFloors = controllerZone.getAllZonesWithFloors;
exports.createZonesInFloor = controllerZone.createZones;
