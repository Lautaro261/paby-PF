// Modelos de base de base de datos
const { Reservation, Cart } = require("../../db");

// Controlador para sacar una reservación del carrito de compras
const removeReservationCart = async (id, userId) => {
  // Buscar la reservación a eliminar
  const reservation = await Reservation.findByPk(id, {
    include: [
      {
        model: Cart,
        where: {
          userSub: userId,
        },
      },
    ],
  });

  if (!reservation) {
    return {
      message: "La reservación o el usuario no existe",
    };
  }

  // Actualizar la reservación
  await reservation.update({
    cartId: null,
    payment_status: "rejected",
    reservation_status: "Cancelada",
  });

  // Obtener el carrito de compras actual del usuario
  const shoppingCart = await Cart.findOne({
    where: {
      userSub: userId,
      cart_status: "Por pagar",
    },
  });

  // Actualizar el carrito de compras
  const reservationsCount = await Reservation.count({
    where: {
      cartId: shoppingCart.id,
    },
  });
  const cartAmount = await Reservation.sum("full_reserve_value", {
    where: {
      cartId: shoppingCart.id,
    },
  });

  await shoppingCart.update({
    cart_status: reservationsCount > 0 ? "Por pagar" : "Vacio",
    cart_amount: cartAmount,
    quantity: reservationsCount,
  });

  return {
    message: "Reservación eliminada del carrito de compras exitosamente",
  };
};

module.exports = { removeReservationCart };
