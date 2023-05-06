// Controladores de reservacion:
const { notification } = require("../controllers/postNotificationMp");

// En el controlador handlerNotification
const handlerNotification = async (req, res) => {
  try {
    const updateStatusPayment = await notification();
    res.status(200).json(updateStatusPayment);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { handlerNotification };
