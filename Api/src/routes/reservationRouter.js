const { Router } = require("express");
const {
  handlerGetAllReservations,
  handlerGetIdUser,
  handlerGetIdReservations,
  handlerGetIdZones,
} = require("../handlers/handlerGetParkings");
const {
  handlerCreateReservation,
} = require("../handlers/handlerPostReservation");

const reservationRouter = Router();

//// Rutas de Reservacion
// reservationRouter.get("/allsReservation", handlerGetAllReservations);
// reservationRouter.get("/:idUser", handlerGetIdUser);
// reservationRouter.get("/:idReservacion", handlerGetIdReservations);
// reservationRouter.get("/:idZones", handlerGetIdZones);
reservationRouter.post("/:userId/:zoneId/create", handlerCreateReservation);

module.exports = reservationRouter;
