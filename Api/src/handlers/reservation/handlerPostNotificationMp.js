// Controladores de reservacion:
const {
  notification,
} = require("../../controllers/reservation/postNotificationMp");

// Handler que cambia el estado de pago
const handlerNotification = async (req, res) => {
  // Obtener los datos enviados por Mercado Pago desde la URL
  const { preference_id, collection_id, collection_status } = req.query;
  try {
    const updateStatusPayment = await notification(
      preference_id,
      collection_id,
      collection_status
    );
    if (updateStatusPayment) {
      res.status(200).json(updateStatusPayment);
    } else {
      res.status(200).send({
        message: "Los estados ya se actualizaron correctamente",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { handlerNotification };
