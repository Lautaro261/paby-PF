const { Router } = require("express");
const {
  handlerGetAllReservations,
  handlerGetIdUser,
  handlerGetIdReservations,
  handlerGetIdZones,
} = require("../handlers/handlerGetParkings");
const { handlerCreatePayment } = require("../handlers/handlerPostPayment");

const paymentRouter = Router();

//// Rutas de Reservacion
// reservationRouter.get("/allsReservation", handlerGetAllReservations);
// reservationRouter.get("/:idUser", handlerGetIdUser);
// reservationRouter.get("/:idReservacion", handlerGetIdReservations);
// reservationRouter.get("/:idZones", handlerGetIdZones);
paymentRouter.post("/create", handlerCreatePayment);

module.exports = paymentRouter;
