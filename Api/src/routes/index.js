const { Router } = require("express");
const usersRouter = require("./usersRouter");
const parkingRouter = require("./parkingRouter");
const floorRouter = require("./floorRouter");
const zonesRouter = require("./zoneRouter");
const reservationRouter = require("./reservationRouter");

const routes = Router();

//routes.use('/vehicles', vehiclesRouter)
routes.use("/users", usersRouter);
routes.use("/parking", parkingRouter);
routes.use("/floors", floorRouter);
routes.use("/zones", zonesRouter);
routes.use("/reservation", reservationRouter);

module.exports = routes;
