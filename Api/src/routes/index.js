const { Router } = require("express");
const userRouter = require("./userRouter");
const parkingRouter = require("./parkingRouter");
const floorRouter = require("./floorRouter");
const zonesRouter = require("./zoneRouter");
const reservationRouter = require("./reservationRouter");
const adminRouter = require("./adminRouter");

//// !! ACTUALIZAR CONTROLLER PARA ACTUALIZAR ESTADOS !! ////
const cron = require("node-cron");
const { updateStatus } = require("../controllers/updateStatus");
// Ejecutar la actualización de estado cada 5 minutos
cron.schedule("*/5 * * * *", updateStatus);

const routes = Router();

routes.use("/user", userRouter);
routes.use("/admin", adminRouter);
routes.use("/parking", parkingRouter);
routes.use("/floors", floorRouter);
routes.use("/zones", zonesRouter);
routes.use("/reservation", reservationRouter);

module.exports = routes;
