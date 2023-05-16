// Controlador de los pisos del parqueadero
const updateZone = require("../../controllers/zones/putZones");

//// Handler para modificar el estado de disponibilidad y el nombre de una zona
const handlerUpdateZone = async (req, res) => {
  try {
    const { id } = req.params;
    const { zone_status, zone_number } = req.body;

    const updateZoneById = await updateZone(id, zone_status, zone_number);

    if (updateZoneById) {
      res.status(200).json({ message: "¡Zona actualizada correctamente!" });
    } else {
      res.status(404).json({
        message: "Zona no encontrada o datos ingresados incorrectos",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = handlerUpdateZone;
