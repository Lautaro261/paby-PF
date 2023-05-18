// Controladores de reservacion:
const {
  createReservation,
} = require("../../controllers/reservation/postReservation");
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

// Mercado Pago
const mercadoPago = require("mercadopago");
require("dotenv").config();

mercadoPago.configure({ access_token: process.env.MERCADOPAGO_KEY });

// Handler para crear reservaciones
const handlerCreateReservation = async (req, res) => {
  const {
    userSub,
    zoneId,
    vehicleLicensePlateId,
    admission_time,
    departure_time,
    instant_photo,
    full_reserve_value,
    comments,
  } = req.body;
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    if (!error) {
      try {
        const newReservation = await createReservation(
          userSub,
          zoneId,
          vehicleLicensePlateId,
          admission_time,
          departure_time,
          instant_photo,
          full_reserve_value,
          comments
        );
        res.status(200).json({ newReservation });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

module.exports = handlerCreateReservation;
