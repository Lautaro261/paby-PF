const { Router } = require("express");
const handlerParking = require("../handlers/handlerParking");
const handlerFloor = require("../handlers/handlerFloor");
// const parkingHandlers = require("../handlers/handlerParking");

const parkingRouter = Router();

// Rutas de Parqueadero
parkingRouter.get("/", handlerParking.getParkings);
parkingRouter.get("/:id", handlerParking.getParkingId);
parkingRouter.post("/", handlerParking.postParking);
parkingRouter.put("/:id", handlerParking.updateParking);

// Rutas de Pisos del Parqueadero
parkingRouter.get("/floors", handlerFloor.getFloors);
parkingRouter.get("/floors/:id", handlerFloor.getFloorsById);
parkingRouter.get("/zone" /* handler */);

//parkingRouter.post('/zone', )
//parkingRouter.post('/floor', )

module.exports = parkingRouter;
