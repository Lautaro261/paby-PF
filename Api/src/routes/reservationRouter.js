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

const { handlerCreateCart } = require("../handlers/handlerPostCart");
const { handlerCreateRC } = require("../handlers/handlerCreateRC");
const { handlerGetCart } = require("../handlers/handlerGetCart");
const {
  handlerPaymentPreference,
} = require("../handlers/handlerPaymentPreference");

const reservationRouter = Router();

//// Rutas de Reservacion
reservationRouter.get("/alls", handlerGetAllReservations);
reservationRouter.get("/:id", handlerGetReservationsByUserId);
reservationRouter.get("/:id/cart", handlerGetCart);
reservationRouter.post("/notification", handlerNotification);
reservationRouter.post("/updatestates", handlerUpdateStatus);
reservationRouter.post("/create", handlerCreateReservation);
reservationRouter.post("/createcart", handlerCreateCart);
reservationRouter.post("/createrc", handlerCreateRC);
reservationRouter.post("/:id/payment", handlerPaymentPreference);

module.exports = reservationRouter;
