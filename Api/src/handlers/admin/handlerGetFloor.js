// Controlador de los pisos del parqueadero
const {
  getAllFloors,
  getFloorsByParkingId,
} = require("../../controllers/floor/getFloor");
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

// Handler para obtener todos los pisos de todos los parqueaderos
const handlerGetAllFloors = async (req, res) => {
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    if (!error) {
      try {
        const floors = await getAllFloors();
        res.status(200).json({ floors });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

// Handler para obtener los pisos de un parqueadero
const handlerGetFloorsByParkingId = async (req, res) => {
  const { id } = req.params;
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    if (!error) {
      try {
        const floors = await getFloorsByParkingId(id);
        res.status(200).json({ floors });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

module.exports = {
  handlerGetAllFloors,
  handlerGetFloorsByParkingId,
};
