const { createCart } = require("../controllers/postCart");

const handlerCreateCart = async (req, res) => {
  const { userSub, quantity, cart_amount, cart_status } = req.body; // suponiendo que obtienes el id del usuario a través del middleware de autenticación
  try {
    const newShoppingCart = await createCart(
      userSub,
      quantity,
      cart_amount,
      cart_status
    );
    res.status(201).json(newShoppingCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { handlerCreateCart };
