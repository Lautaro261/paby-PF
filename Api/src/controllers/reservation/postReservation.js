// Modelos de base de base de datos
const { Reservation, User, Zone, Vehicle } = require("../../db");
const { Op } = require("sequelize");

// Mercado Pago

const mercadoPago = require("mercadopago");
require("dotenv").config();
const { URL_SUCCESS, URL_PENDING, URL_FAILURE } = process.env;

mercadoPago.configure({ access_token: process.env.MERCADOPAGO_KEY });

// Controller para crear reservaciones
const createReservation = async (
  userSub,
  zoneId,
  vehicleLicensePlateId,
  admission_time,
  departure_time,
  instant_photo,
  full_reserve_value,
  comments
) => {
  // Verificar si el usuario existe
  const user = await User.findOne({
    where: {
      sub: userSub,
    },
  });
  if (!user) {
    throw new Error("El usuario no existe");
  }

  // Verificar si la zona existe
  const zone = await Zone.findByPk(zoneId);
  if (!zone) {
    throw new Error("La zona no existe");
  }

  // Verificar si el vehiculo existe
  const vehicle = await Vehicle.findByPk(vehicleLicensePlateId);
  if (!vehicle) {
    throw new Error("El vehiculo no existe");
  }

  // Verificar si la zona ya está reservada para la hora especificada
  const existingReservation = await Reservation.findOne({
    where: {
      zoneId: zoneId,
      [Op.or]: [
        {
          admission_time: {
            [Op.between]: [admission_time, departure_time],
          },
        },
        {
          departure_time: {
            [Op.between]: [admission_time, departure_time],
          },
        },
        {
          admission_time: {
            [Op.lte]: admission_time,
          },
          departure_time: {
            [Op.gte]: departure_time,
          },
        },
      ],
    },
  });
  if (existingReservation) {
    throw new Error(
      "La zona ya está reservada para el rango de tiempo especificado"
    );
  }

  // // Verificar si el método de pago existe
  // const payment = await Payment.findByPk(paymentId);
  // if (!payment) {
  //   throw new Error("El método de pago no existe");
  // }

  //// Asignar datos a la preferencia de pago en Mercado Pago ////
  const preference = {
    items: [
      {
        id: `${userSub}-${zoneId}`,
        category_id: "Transporte",
        title: `Reservación de la zona # ${zone.zone_number} del Cliente ${user.name} con el vehiculo ${vehicle.car_brand}`,
        description: `Reservación de la zona ${zone.zone_number} desde ${admission_time} hasta ${departure_time}`,
        quantity: 1,
        currency_id: "COP",
        unit_price: full_reserve_value,
      },
    ],
    payer: {
      name: user.name,
      // phone: user.phone,
      // email: user.email,
      // country_name: user.country,
      // city_name: user.city,
    },
    back_urls: {
      success: URL_SUCCESS,
      pending: URL_PENDING,
      failure: URL_FAILURE,
    },
    auto_return: "approved",
    binary_mode: true,
    // notification_url: "http://localhost:3001/reservation/notification",
  };

  //// Crear la preferencia de pago en Mercado Pago ////

  const response = await mercadoPago.preferences.create(preference);

  // Crear la reservación
  const newReservation = await Reservation.create({
    userSub,
    zoneId,
    vehicleLicensePlateId,
    admission_time,
    departure_time,
    instant_photo,
    full_reserve_value,
    comments,
    payment_link: response.body.sandbox_init_point,
    preference_id: response.body.id,
  });
  return response.body.sandbox_init_point;
};

module.exports = { createReservation };
