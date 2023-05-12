const mercadopago = require("mercadopago");
// const { getCart } = require("./getCart");
const { Reservation, Zone } = require("../db");

const mercadoPago = require("mercadopago");
require("dotenv").config();

mercadoPago.configure({ access_token: process.env.MERCADOPAGO_KEY });

const url_success = "http://localhost:5173/success-payment";
const url_failure = "http://localhost:5173/pending-payment";
const url_pending = "http://localhost:5173/failure-payment";

const createMercadoPagoPreference = async (id) => {
  // Busca las reservaciones asociadas al carrito

  //   const reservations = await getCart(id);

  const reservations = await Reservation.findAll({
    where: {
      cartId: id,
    },
    include: {
      model: Zone,
    },
  });

  if (!reservations.length) {
    return {
      message: "No hay reservaciones en el carrito",
    };
  }

  // Crea un arreglo de items para la preferencia de pago
  const items = reservations.map((reservation) => {
    return {
      title: `Reserva(s) de la zona(s) ${reservation.zone.zone_number}`,
      description: `Reservaciones de zona(s) para parquear`,
      category_id: "Transporte",
      quantity: 1,
      currency_id: "COP",
      unit_price: reservation.full_reserve_value,
    };
  });

  // Crea la preferencia de pago utilizando la API de MercadoPago
  const preference = {
    items,
    back_urls: {
      success: url_success,
      pending: url_pending,
      failure: url_failure,
    },
    auto_return: "approved",
  };

  // Crear la preferencia de pago en MercadoPago
  const response = await mercadopago.preferences.create(preference);

  await Reservation.findAll({
    where: {
      cartId: id,
    },
  });

  reservations.forEach(async (reservation) => {
    reservation.preference_id = response.body.id;
    reservation.payment_link = response.body.sandbox_init_point;
    await reservation.save();
  });

  return response.body.sandbox_init_point;
};

module.exports = { createMercadoPagoPreference };
