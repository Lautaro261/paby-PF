// Controlador de los pisos del parqueadero
const controllerZone = require("../controllers/controllerZone");

exports.createZonesInFloor = controllerZone.createZones;
exports.getZonesWithFloors = controllerZone.getAllZonesWithFloors;
exports.getAllZonesOfAllFloors = controllerZone.getAllZones;
exports.updateZones = controllerZone.updateZone;
