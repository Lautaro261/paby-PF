// Modelos de base de base de datos
const { Reservation, User, Zone, Vehicle, Cart } = require("../db");
const { Op } = require("sequelize");

// Controlador para crear reservaciones y agregarlas al carrito de compras
const createReservationCart = async (
    userSub,
    zoneId,
    vehicleLicensePlateId,
    admission_time,
    departure_time,
    instant_photo,
    full_reserve_value,
    total_amount,
    comments,
    req // Objeto request de Express
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

    // Verificar si la zona existe
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

    // Obtener el carrito de compras actual del usuario
    const shoppingCart = await Cart.findOne({
        where: {
            userSub: user.sub,
        },
    });

    // Crear la reservación con el shoppingCartId asignado
    const newReservation = await Reservation.create({
        userSub,
        zoneId,
        vehicleLicensePlateId,
        admission_time,
        departure_time,
        instant_photo,
        full_reserve_value,
        comments,
        CartId: shoppingCart.id,
    });

    return newReservation;
};

module.exports = { createReservationCart };
