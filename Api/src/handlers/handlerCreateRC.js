// Controladores de reservacion:
const { createReservationCart } = require("../controllers/postReservationcart");

// Mercado Pago

const mercadoPago = require("mercadopago");
require("dotenv").config();

mercadoPago.configure({ access_token: process.env.MERCADOPAGO_KEY });

// Handler para crear reservaciones
const handlerCreateRC = async (req, res) => {
    const {
        userSub,
        zoneId,
        vehicleLicensePlateId,
        admission_time,
        departure_time,
        instant_photo,
        full_reserve_value,
        comments,
    } = req.body;

    try {
        const newReservation = await createReservationCart(
            userSub,
            zoneId,
            vehicleLicensePlateId,
            admission_time,
            departure_time,
            instant_photo,
            full_reserve_value,
            comments,
        );
        res.status(200).json(newReservation);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
};

module.exports = { handlerCreateRC };
