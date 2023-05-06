// Modelos de base de base de datos
const { Reservation, User, Zone, Payment } = require("../db");

// Mercado Pago

const mercadoPago = require("mercadopago");
require("dotenv").config();

mercadoPago.configure({ access_token: process.env.MERCADOPAGO_KEY });

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

  //// Asignar datos a la preferencia de pago en Mercado Pago ////
  const preference = {
    items: [
      {
        id: `${userId}-${zoneId}`,
        category_id: "Transporte",
        title: `Reservación de la zona # ${zone.zone_number}`,
        description: `Reservación de la zona ${zone.zone_number} desde ${admission_time} hasta ${departure_time}`,
        quantity: 1,
        currency_id: "COP",
        unit_price: full_reserve_value,
      },
    ],
    payer: {
      name: user.name,
      // phone: user.phone,
      email: user.email,
      country_name: user.country,
      city_name: user.city,
    },
    back_urls: {
      success: "http://localhost:5173/success-payment",
      pending: "http://localhost:5173/pending-payment",
      failure: "",
    },
    auto_return: "approved",
    binary_mode: true,
    // notification_url: "http://localhost:5173/notifications",
  };

  //// Crear la preferencia de pago en Mercado Pago ////

  const response = await mercadoPago.preferences.create(preference);

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
    reservation_status: response.body.auto_return,
    total_amount,
    comments,
    preference_id: response.body.id,
  });
  return response.body.sandbox_init_point;
};

module.exports = { createReservation };
