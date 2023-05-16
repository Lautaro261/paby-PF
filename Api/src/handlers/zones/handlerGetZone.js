// Controlador de los pisos del parqueadero
const {
  getAllZonesWithFloors,
  getZonesByParkingId,
} = require("../../controllers/zones/getZones");

//// Handler para obtener todas las zonas de los pisos
const handlerGetAllZonesWithFloors = async (req, res) => {
  try {
    const zones = await getAllZonesWithFloors();
    if (zones) {
      res.status(200).json(zones);
    } else {
      res.status(404).json({
        message: "No hay pisos con zonas creadas",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

//// Handler para ver todas las zonas de todos los pisos del parqueadero
const handlerGetZonesByParkingId = async (req, res) => {
  const { id } = req.params;
  try {
    // Verificar si el parqueadero existe
    const zones = await getZonesByParkingId(id);
    if (zones) {
      res.status(200).json(zones);
    } else {
      res.status(404).json({
        message: "Parqueadero no encontrado o datos de busqueda incorrectos",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {
  handlerGetAllZonesWithFloors,
  handlerGetZonesByParkingId,
};
