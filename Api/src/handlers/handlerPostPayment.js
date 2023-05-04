// Controladores de reservacion:
const { createPayment } = require("../controllers/postPayment");

// Handler para crear un nuevo pago
const handlerCreatePayment = async (req, res) => {
  const { id, name, payment_status } = req.body;

  try {
    const newPayment = await createPayment(id, name, payment_status);
    res.status(200).json(newPayment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { handlerCreatePayment };
