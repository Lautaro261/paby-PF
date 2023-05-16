const { createCart } = require("../../controllers/cart/postCart");

const handlerPostCart = async (req, res) => {
  const { userSub } = req.body; // suponiendo que obtienes el id del usuario a través del middleware de autenticación
  try {
    const newShoppingCart = await createCart(userSub);
    if (newShoppingCart) {
      res.status(201).json(newShoppingCart);
    } else {
      res
        .status(404)
        .json({ message: "Ya el usuario tiene un carrito activo" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { handlerPostCart };
