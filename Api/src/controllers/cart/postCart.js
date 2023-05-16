const { Cart, User } = require("../../db");
const { Op } = require("sequelize");

const createCart = async (userSub) => {
  // Buscar el carrito activo del usuario
  const activeCart = await Cart.findOne({
    where: {
      userSub,
      cart_status: { [Op.or]: ["Vacio", "Por pagar"] },
    },
  });

  if (activeCart) {
    return {
      message:
        "No se puede crear un nuevo carrito, el usuario ya tiene un carrito activo",
    };
  }

  // Buscar el usuario
  const user = await User.findOne({
    where: {
      sub: userSub,
    },
  });

  if (!user) {
    return {
      message: "El usuario no existe",
    };
  }

  // Crear el nuevo carrito
  const newShoppingCart = await Cart.create({
    userSub,
  });
  return newShoppingCart;
};

module.exports = { createCart };
