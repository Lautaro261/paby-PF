const { Reservation, Cart } = require("../db");

// Controller para obtener todas las reservaciones de un carrito
const getCart = async (id) => {
  // Verificar si el carrito existe
  const cart = await Cart.findByPk(id);
  if (!cart) {
    return {
      message: "Carrito no existe",
    };
  }

  // Obtener las reservaciones asociadas al carrito
  const reservations = await Reservation.findAll({
    where: {
      cartId: id,
    },
    attributes: [
      "id",
      "admission_time",
      "departure_time",
      "full_reserve_value",
      "payment_date",
      "payment_status",
      "reservation_status",
    ],
  });

  return reservations;
};

// Controller para obtener todos los carritos de un usuario
const getCartAndReservations = async (id) => {
  // Verificar si el usuario tiene un carrito asociado
  const cart = await Cart.findOne({
    where: {
      userSub: id,
    },
  });
  if (!cart) {
    return {
      message: "El usuario no tiene carrito",
    };
  }

  // Obtener las reservaciones asociadas al carrito
  const reservations = await Reservation.findAll({
    where: {
      cartId: cart.id,
    },
    attributes: ["id", "payment_status", "reservation_status"],
    include: {
      model: Cart,
      attributes: ["cart_status", "cart_amount", "quantity"],
    },
  });

  return {
    cartId: cart.id,
    reservations: reservations,
  };
};

module.exports = { getCart, getCartAndReservations };
