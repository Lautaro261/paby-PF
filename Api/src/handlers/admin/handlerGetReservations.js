// Controlador del parqueadero
const {
  getAllReservations,
  getReservationsByUserId,
} = require("../../controllers/reservation/getReservation");
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

// Handler para obtener todas las reservaciones
const handlerGetAllReservations = async (req, res) => {
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    if (!error) {
      try {
        const reservations = await getAllReservations();
        res.status(200).json({ reservations });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

// Handler para obtener todas las reservaciones de un usuario en especifico
const handlerGetReservationsByUserId = async (req, res) => {
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    const { id } = req.params;
    if (!error) {
      try {
        const reservations = await getReservationsByUserId(id);
        res.status(200).json({ reservations });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

module.exports = { handlerGetAllReservations, handlerGetReservationsByUserId };
