const { Router } = require("express");
const {
  handlerGetAllReservations,
  handlerGetReservationsByUserId,
} = require("../handlers/handlerGetReservations");
const {
  handlerCreateReservation,
} = require("../handlers/handlerPostReservation");
const { handlerUpdateStatus } = require("../handlers/handlerUpdateStatus");
const {
  handlerNotification,
} = require("../handlers/handlerPostNotificationMp");

const reservationRouter = Router();

//// Rutas de Reservacion
reservationRouter.get("/alls", handlerGetAllReservations);
reservationRouter.get("/:id", handlerGetReservationsByUserId);
reservationRouter.post("/notification", handlerNotification);
reservationRouter.post("/updatestates", handlerUpdateStatus);
reservationRouter.post("/create", handlerCreateReservation);

module.exports = reservationRouter;
