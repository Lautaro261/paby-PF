// Modelos de base de base de datos
const { Reservation } = require("../db");

// En el controlador handlerNotification
const notification = async (req, res) => {
  // Obtener el ID de la preferencia de pago de la notificación
  const preferenceId = req.body.data.id;

  // Buscar la reserva correspondiente en la base de datos
  const reservation = await Reservation.findOne({
    where: { preference_id: preferenceId },
  });

  // Actualizar el estado de pago de la reserva a "success"
  reservation.payment_status = "success";
  await reservation.save();

  // Enviar una respuesta a Mercado Pago para confirmar la recepción de la notificación
  res.sendStatus(200);
};

module.exports = { notification };
