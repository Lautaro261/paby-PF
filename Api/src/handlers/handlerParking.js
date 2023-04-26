// Controlador del parqueadero
const controllerParking = require("../controllers/controllerParking");

exports.getParkings = controllerParking.getAllParkings;
exports.getParkingId = controllerParking.getParkingById;
exports.postParking = controllerParking.createParking;
exports.updateParking = controllerParking.updateParking;
