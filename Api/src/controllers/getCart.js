const { Reservation, Cart } = require("../db");

const getCart = async (id) => {
    // Verificar si el carrito existe
    const cart = await Cart.findByPk(id);
    if (!cart) {
        return {
            message: "Carrito no existe",
        };
    }

    // Obtener las reservaciones asociadas al carrito
    const reservations = await Reservation.findAll({
        where: {
            cartId: id,
        },
    });

    return reservations;
};

module.exports = { getCart };
