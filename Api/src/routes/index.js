const { Router } = require("express");
const usersRouter = require("./usersRouter");
const parkingRouter = require("./parkingRouter");
const floorRouter = require("./floorRouter");
const zonesRouter = require("./zoneRouter");
const reservationRouter = require("./reservationRouter");

//// !! ACTUALIZAR CONTROLLER PARA ACTUALIZAR ESTADOS !! ////
const cron = require("node-cron");
const { updateStatus } = require("../controllers/updateStatus");
// Ejecutar la actualización de estado cada 5 minutos
cron.schedule("*/5 * * * *", updateStatus);

const routes = Router();

//routes.use('/vehicles', vehiclesRouter)
routes.use("/users", usersRouter);
routes.use("/parking", parkingRouter);
routes.use("/floors", floorRouter);
routes.use("/zones", zonesRouter);
routes.use("/reservation", reservationRouter);

module.exports = routes;
