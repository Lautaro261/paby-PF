// Controladores de reservacion:
const { createReservation } = require("../controllers/postReservation");

// Mercado Pago

const mercadoPago = require("mercadopago");
require("dotenv").config();

mercadoPago.configure({ access_token: process.env.MERCADOPAGO_KEY });

// Handler para crear reservaciones
const handlerCreateReservation = async (req, res) => {
  const {
    userId,
    zoneId,
    vehicleLicensePlateId,
    admission_time,
    departure_time,
    instant_photo,
    full_reserve_value,
    total_amount,
    comments,
  } = req.body;

  try {
    const newReservation = await createReservation(
      userId,
      zoneId,
      vehicleLicensePlateId,
      admission_time,
      departure_time,
      instant_photo,
      full_reserve_value,
      total_amount,
      comments
    );
    res.status(200).json(newReservation);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { handlerCreateReservation };
