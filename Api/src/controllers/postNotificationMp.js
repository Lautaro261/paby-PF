// Modelos de base de base de datos
const { Reservation, Cart } = require("../db");

// Controlador handlerNotification
const notification = async (
  preference_id,
  collection_id,
  collection_status
) => {
  // Buscar todas las reserva correspondientes en la base de datos
  const reservations = await Reservation.findAll({
    where: {
      preference_id: preference_id,
    },
  });

  // Buscar todas las reserva correspondientes en la base de datos
  const oneReservation = await Reservation.findOne({
    where: {
      preference_id: preference_id,
    },
  });

  if (!reservations || !oneReservation) {
    return {
      message: "El numero de pago no corresponde al de la reservacion",
    };
  }

  // Actualizar el estado de pago de la reserva a "approved"
  // reservation.payment_status = collection_status;
  // reservation.payment_transaction_id = collection_id;

  // if (reservation.payment_status === "approved") {
  //   reservation.reservation_status = "Pagada"
  // }else{
  //   reservation.reservation_status = "Pago rechazado"
  // }

  // await reservation.save();

  // Actualizar el estado de pago de la reserva a "approved"
  for (const reservation of reservations) {
    reservation.payment_status = collection_status;
    reservation.payment_transaction_id = collection_id;

    if (reservation.payment_status === "approved") {
      reservation.reservation_status = "Pagada";
    } else {
      reservation.reservation_status = "Pago rechazado";
    }
    // Guardar cambios en el modelo Reservacion
    await reservation.save();
  }

  // Actualizar el estado del carrito a "Pagado"
  const cartId = oneReservation.cartId;
  await Cart.update(
    { cart_status: "Pagado" },
    {
      where: {
        id: cartId,
      },
    }
  );
};

module.exports = { notification };
