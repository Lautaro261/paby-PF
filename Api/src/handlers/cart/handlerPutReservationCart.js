const {
  removeReservationCart,
} = require("../../controllers/reservation/putReservationCart");

const handlerRemoveReservationCart = async (req, res) => {
  const { sub } = req.body; // Obtener el sub de la reservacion
  const { id } = req.params; // Obtener el Id de la reservacion
  try {
    const cartUpdate = await removeReservationCart(id, sub);
    if (cartUpdate) {
      res.status(201).json(cartUpdate);
    } else {
      res.status(404).json({ message: "Ya la reservacion fue removida" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { handlerRemoveReservationCart };
