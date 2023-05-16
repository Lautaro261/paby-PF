const { Reservation, Cart } = require("../../db");

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
      "zoneId",
      "vehicleLicensePlateId",
    ],
    include: {
      model: Cart,
      attributes: ["cart_status", "cart_amount", "quantity"],
    },
  });

  if (reservations.length > 0) {
    return reservations;
  } else {
    return {
      cartId: cart.id,
      cart_status: cart.cart_status,
      cart_amount: cart.cart_amount,
      quantity: cart.quantity,
    };
  }
};

// Controller para obtener todos los carritos de un usuario
const getCartAndReservations = async (id) => {
  // Verificar si el usuario tiene un carrito asociado
  const carts = await Cart.findAll({
    where: {
      userSub: id,
    },
  });
  if (!carts || carts.length === 0) {
    return {
      message: "El usuario no tiene carrito",
    };
  }

  const cartsWithReservations = await Promise.all(
    carts.map(async (cart) => {
      // Obtener las reservaciones asociadas a cada carrito
      const reservations = await Reservation.findAll({
        where: {
          cartId: cart.id,
        },
        attributes: [
          "id",
          "payment_status",
          "reservation_status",
          "admission_time",
          "departure_time",
          "zoneId",
          "vehicleLicensePlateId",
        ],
      });

      return {
        cartId: cart.id,
        cart_status: cart.cart_status,
        cart_amount: cart.cart_amount,
        quantity: cart.quantity,
        reservations: reservations,
      };
    })
  );
  return cartsWithReservations;
};

module.exports = { getCart, getCartAndReservations };
