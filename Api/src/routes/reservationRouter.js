const { Router } = require("express");
const {
  handlerGetAllReservations,
  handlerGetReservationsByUserId,
} = require("../handlers/reservation/handlerGetReservations");
const {
  handlerCreateReservation,
} = require("../handlers/reservation/handlerPostReservation");
const { handlerUpdateStatus } = require("../handlers/handlerUpdateStatus");
const {
  handlerNotification,
} = require("../handlers/reservation/handlerPostNotificationMp");

const { handlerPostCart } = require("../handlers/cart/handlerPostCart");
const { handlerCreateRC } = require("../handlers/cart/handlerCreateRC");
const {
  handlerGetCart,
  handlerGetCartAndReservations,
} = require("../handlers/cart/handlerGetCart");
const {
  handlerPaymentPreference,
} = require("../handlers/reservation/handlerPaymentPreference");
const {
  handlerRemoveReservationCart,
} = require("../handlers/cart/handlerPutReservationCart");

const reservationRouter = Router();

//// Rutas de Reservacion
reservationRouter.get("/alls", handlerGetAllReservations);
reservationRouter.get("/:id", handlerGetReservationsByUserId);
reservationRouter.get("/:id/carts", handlerGetCartAndReservations);
reservationRouter.get("/:id/reservations", handlerGetCart);
reservationRouter.post("/notification", handlerNotification);
reservationRouter.post("/updatestates", handlerUpdateStatus);
reservationRouter.post("/create", handlerCreateReservation);
reservationRouter.post("/createcart", handlerPostCart);
reservationRouter.post("/createrc", handlerCreateRC);
reservationRouter.post("/:id/payment", handlerPaymentPreference);
reservationRouter.put("/:id/remove", handlerRemoveReservationCart);

module.exports = reservationRouter;
