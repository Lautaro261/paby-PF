const { Router } = require("express");
const usersRouter = require("./usersRouter");
const parkingRouter = require("./parkingRouter");
const floorRouter = require("./floorRouter");

const routes = Router();

//routes.use('/vehicles', vehiclesRouter)
routes.use("/users", usersRouter);
routes.use("/parking", parkingRouter);
routes.use("/floors", floorRouter);

module.exports = routes;
