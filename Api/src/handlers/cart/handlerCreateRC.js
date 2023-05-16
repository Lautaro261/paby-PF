// Controladores de reservacion:
const {
  postReservationCart,
} = require("../../controllers/cart/postReservationcart");

// Handler para crear reservaciones
const handlerCreateRC = async (req, res) => {
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

  try {
    const newReservation = await postReservationCart(
      userSub,
      zoneId,
      vehicleLicensePlateId,
      admission_time,
      departure_time,
      instant_photo,
      full_reserve_value,
      comments
    );
    res.status(200).json(newReservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { handlerCreateRC };
