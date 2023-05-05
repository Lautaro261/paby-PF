// Controladores de reservacion:
const { createReservation } = require("../controllers/postReservation");

// Mercado Pago

const mercadoPago = require("mercadopago");
require("dotenv").config();

mercadoPago.configure({ access_token: process.env.MERCADOPAGO_KEY });

// Handler para crear reservaciones
const handlerCreateReservation = async (req, res) => {
  const {
    paymentId,
    admission_time,
    departure_time,
    instant_photo,
    full_reserve_value,
    payment_date,
    reservation_status,
    total_amount,
    comments,
  } = req.body;
  const { userId, zoneId } = req.params;

  try {
    const newReservation = await createReservation(
      userId,
      zoneId,
      paymentId,
      admission_time,
      departure_time,
      instant_photo,
      full_reserve_value,
      payment_date,
      reservation_status,
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
