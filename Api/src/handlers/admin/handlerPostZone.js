// Controlador de los pisos del parqueadero
const createZones = require("../../controllers/zones/postZones");
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

//// Handler para asignar zonas automaticamente a un piso
const handlerCreateZones = async (req, res) => {
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    const { id } = req.params;
    if (!error) {
      try {
        const newZones = await createZones(id);
        res.status(200).json({ newZones });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

module.exports = handlerCreateZones;
