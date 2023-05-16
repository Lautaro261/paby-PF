// Controlador de los pisos del parqueadero
const updateZone = require("../../controllers/zones/putZones");
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

//// Handler para modificar el estado de disponibilidad y el nombre de una zona
const handlerUpdateZone = async (req, res) => {
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    const { id } = req.params;
    const { zone_status, zone_number } = req.body;
    if (!error) {
      try {
        const updateZoneById = await updateZone(id, zone_status, zone_number);
        res.status(200).json({ updateZoneById });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

module.exports = handlerUpdateZone;
