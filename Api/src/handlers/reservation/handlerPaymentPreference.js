const {
  createMercadoPagoPreference,
} = require("../../controllers/reservation/paymentPreference");

const handlerPaymentPreference = async (req, res) => {
  const { id } = req.params;
  try {
    const preference = await createMercadoPagoPreference(id);
    if (preference) {
      res.status(200).json(preference);
    } else {
      res.status(404).json({
        message: "Preferencia de pago del carrito no encontrada",
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { handlerPaymentPreference };
