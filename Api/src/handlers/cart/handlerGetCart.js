const {
  getCart,
  getCartAndReservations,
} = require("../../controllers/cart/getCart");

// Handler para obtener todas las reservaciones de un carrito
const handlerGetCart = async (req, res) => {
  const { id } = req.params;
  try {
    const reservations = await getCart(id);
    res.status(200).json(reservations);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Error interno del servidor" });
  }
};

// Handler para obtener todos los carritos de un usuario
const handlerGetCartAndReservations = async (req, res) => {
  const { id } = req.params;
  try {
    const cartAndReservations = await getCartAndReservations(id);
    res.status(200).json(cartAndReservations);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Error interno del servidor" });
  }
};

module.exports = { handlerGetCart, handlerGetCartAndReservations };
