// Controladores de reservacion:
const { updateStatus } = require("../controllers/updateStatus");

const handlerUpdateStatus = async (req, res) => {
  try {
    const update = await updateStatus();
    if (update) {
      res
        .status(200)
        .json({ message: "Estado actualizado correctamente", update });
    } else {
      res.status(404).json({
        message: "Los estados no han cambiado en los ultimos 5 minutos",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { handlerUpdateStatus };
