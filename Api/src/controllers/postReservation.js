const { Reservation, User, Zone, Payment } = require("../db");

// Controller para crear reservaciones
const createReservation = async (
  userId,
  zoneId,
  paymentId,
  admission_time,
  departure_time,
  instant_photo,
  full_reserve_value,
  payment_date,
  reservation_status,
  total_amount,
  comments
) => {
  // Verificar si el usuario existe
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error("El usuario no existe");
  }

  // Verificar si la zona existe
  const zone = await Zone.findByPk(zoneId);
  if (!zone) {
    throw new Error("La zona no existe");
  }

  // Verificar si la zona ya está reservada para la hora especificada
  const existingReservation = await Reservation.findOne({
    where: {
      zoneId: zoneId,
      admission_time: admission_time,
      departure_time: departure_time,
    },
  });
  if (existingReservation) {
    throw new Error("La zona ya está reservada para la hora especificada");
  }

  // Verificar si el método de pago existe
  const payment = await Payment.findByPk(paymentId);
  if (!payment) {
    throw new Error("El método de pago no existe");
  }

  // Crear la reservación
  const newReservation = await Reservation.create({
    userId,
    zoneId,
    paymentId,
    admission_time,
    departure_time,
    instant_photo,
    full_reserve_value,
    payment_date,
    reservation_status,
    total_amount,
    comments,
  });
  return newReservation;
};

module.exports = { createReservation };
