const mercadopago = require("mercadopago");
// const { getCart } = require("./getCart");
const { Reservation, Cart } = require("../db");

const mercadoPago = require("mercadopago");
require("dotenv").config();

mercadoPago.configure({ access_token: process.env.MERCADOPAGO_KEY });

const url_success = "http://localhost:5173/success-payment";
const url_failure = "http://localhost:5173/pending-payment";
const url_pending = "http://localhost:5173/failure-payment";

const createMercadoPagoPreference = async (id) => {
  // Busca las reservaciones asociadas al carrito
  //   const reservations = await getCart(id);

  // Traigo al modelo del carrito
  const cart = await Cart.findByPk(id);

  if (!cart) {
    return {
      message: "Carrito no existe",
    };
  }

  const reservations = await Reservation.findAll({
    where: {
      cartId: id,
    },
  });

  if (!reservations.length) {
    return {
      message: "No hay reservaciones en el carrito",
    };
  }

  // Crea la preferencia de pago utilizando la API de MercadoPago
  const preference = {
    items: [
      {
        category_id: "Transporte",
        title: `Reservación de zona(s) de parqueo`,
        description: `Reservación de una o varias zonas de parqueo`,
        quantity: 1,
        currency_id: "COP",
        unit_price: cart.cart_amount,
      },
    ],
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
