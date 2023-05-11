const { Reservation, Cart } = require("../db");

const getCart = async (id) => {
    // Verificar si el carrito existe
    const cart = await Cart.findByPk(id);
    if (!cart) {
        throw new Error("El carrito no existe");
    }

    // Obtener las reservaciones asociadas al carrito
    const reservations = await Reservation.findAll({
        where: {
            CartId: id,
        },
    });

    return reservations;
};

module.exports = { getCart };
