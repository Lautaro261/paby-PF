// Controlador del parqueadero
const {
  getAllReservations,
  getReservationsByUserId,
} = require("../../controllers/reservation/getReservation");

// Handler para obtener todas las reservaciones
const handlerGetAllReservations = async (req, res) => {
  try {
    const reservations = await getAllReservations();
    res.status(200).json(reservations);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

// Handler para obtener todas las reservaciones de un usuario en especifico
const handlerGetReservationsByUserId = async (req, res) => {
  const { id } = req.params;

  try {
    const reservations = await getReservationsByUserId(id);
    if (reservations) {
      res.status(200).json(reservations);
    } else {
      res.status(404).json({
        message: "Este usuario no tiene historial de reservaciones",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { handlerGetAllReservations, handlerGetReservationsByUserId };
