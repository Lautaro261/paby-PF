// Modelos de base de base de datos
const { Reservation } = require("../db");

// En el controlador handlerNotification
const notification = async (req, res) => {
  // Obtener los datos enviados por Mercado Pago desde la URL
  const { preference_id, collection_id, collection_status } = req.query;

  // Buscar la reserva correspondiente en la base de datos
  const reservations = await Reservation.findAll({
    where: {
      preference_id: preference_id,
    },
  });

  if (!reservations) {
    return res
      .status(404)
      .json({
        message: "El numero de pago no corresponde al de la reservacion",
      });
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

  for (const reservation of reservations) {
    reservation.payment_status = collection_status;
    reservation.payment_transaction_id = collection_id;

    if (reservation.payment_status === "approved") {
      reservation.reservation_status = "Pagada"
    } else {
      reservation.reservation_status = "Pago rechazado"
    }
  
    await reservation.save();
  }
  // Enviar una respuesta a Mercado Pago para confirmar la recepción de la notificación
  res.sendStatus(200);
};

module.exports = { notification };
