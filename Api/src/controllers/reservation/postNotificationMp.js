// Modelos de base de base de datos
const { Reservation, Cart } = require("../../db");
const { createCart } = require("../../controllers/cart/postCart"); // importar la función createCart
const { Op } = require("sequelize");
const { sendPaymentStatusEmail } = require("../notificationEmail");

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
      await sendPaymentStatusEmail(reservation);
    } else {
      reservation.reservation_status = "Pago rechazado";
      await sendPaymentStatusEmail(reservation);
    }
    // Guardar cambios en el modelo Reservacion
    await reservation.save();
  }

  // Actualizar el estado del carrito a "Pagado"
  const cartId = oneReservation.cartId;
  const [numAffectedRows, affectedRows] = await Cart.update(
    { cart_status: "Pagado" },
    {
      where: {
        id: cartId,
        cart_status: { [Op.ne]: "Pagado" }, // solo actualizar si el carrito aún no está "Pagado"
      },
      returning: true, // devolver las filas actualizadas para verificar el estado del carrito
    }
  );

  if (numAffectedRows > 0 && affectedRows[0].cart_status === "Pagado") {
    // si se actualizó al estado "Pagado", ejecutar createCart
    await createCart(oneReservation.userSub);
  }
};

module.exports = { notification };
