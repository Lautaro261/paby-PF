// Controlador de los pisos del parqueadero
const controllerFloor = require("../controllers/controllerFloor");

exports.getFloors = controllerFloor.getAllFloors;
exports.getFloorsById = controllerFloor.getFloorsByParkingId;
