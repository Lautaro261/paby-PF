// Controlador de los pisos del parqueadero
const {
  getAllZonesWithFloors,
  getZonesByParkingId,
} = require("../../controllers/zones/getZones");
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

//// Handler para obtener todas las zonas de los pisos
const handlerGetAllZonesWithFloors = async (req, res) => {
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    if (!error) {
      try {
        const zones = await getAllZonesWithFloors();
        res.status(200).json({ zones });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

//// Handler para ver todas las zonas de todos los pisos del parqueadero
const handlerGetZonesByParkingId = async (req, res) => {
  const { id } = req.params;
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    if (!error) {
      try {
        const zones = await getZonesByParkingId(id);
        res.status(200).json({ zones });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

module.exports = {
  handlerGetAllZonesWithFloors,
  handlerGetZonesByParkingId,
};
