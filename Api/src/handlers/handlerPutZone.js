// Controlador de los pisos del parqueadero
const updateZone = require("../controllers/putZones");

//// Handler para modificar el estado de disponibilidad y el nombre de una zona
const handlerUpdateZone = async (req, res) => {
  try {
    const { id } = req.params;
    const { zone_status, zone_number } = req.body;

    const zone = await updateZone(id, zone_status, zone_number);

    if (zone) {
      res.status(200).json({ message: "¡Zona actualizada correctamente!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = handlerUpdateZone;
