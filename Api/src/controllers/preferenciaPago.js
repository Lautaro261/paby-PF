const mercadopago = require("mercadopago");
const { getCart } = require("../controllers/getCart");
const { Cart, Reservation } = require("../db")

const mercadoPago = require("mercadopago");
require("dotenv").config();

mercadoPago.configure({ access_token: process.env.MERCADOPAGO_KEY });

const createMercadoPagoPreference = async (id) => {
    // Busca las reservaciones asociadas al carrito
    const reservations = await getCart(id);

    // Crea un arreglo de items para la preferencia de pago
    const items = reservations.map((reservation) => {
        return {
            title: `Reserva en zona ${reservation.zoneId}`,
            description: `Reserva de ${reservation.admission_time} a ${reservation.departure_time}`,
            quantity: 1,
            currency_id: "COP",
            unit_price: reservation.full_reserve_value,
        };
    });

    // Crea la preferencia de pago utilizando la API de MercadoPago
    const preference = {
        items,
        back_urls: {
            success: "http://localhost:3000/success",
            pending: "http://localhost:3000/pending",
            failure: "http://localhost:3000/failure",
        },
        auto_return: "approved",
    };

    // Crear la preferencia de pago en MercadoPago
    const response = await mercadopago.preferences.create(preference);
    return response.body.sandbox_init_point;

};

module.exports = { createMercadoPagoPreference };
