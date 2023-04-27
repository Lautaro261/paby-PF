const { Router } = require("express");
const handlerParking = require("../handlers/handlerParking");

const parkingRouter = Router();

//// Rutas de Parqueadero
parkingRouter.get("/", handlerParking.getParkings);
parkingRouter.get("/:id", handlerParking.getParkingId);
parkingRouter.post("/", handlerParking.postParking);
parkingRouter.put("/:id", handlerParking.updateParking);

module.exports = parkingRouter;