// Controlador del parqueadero
const {
  getAllParkings,
  getParkingById,
} = require("../../controllers/parking/getParking");
require("dotenv").config();
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

// Handler para obtener todos los parqueaderos
const handlerGetAllParkings = async (req, res) => {
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    if (!error) {
      try {
        const getAllParkingsData = await getAllParkings();
        res.status(200).json({ getAllParkingsData });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

// Handler para obtener un parqueadero por id
const handlerGetParkingById = async (req, res) => {
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    const { id } = req.params;
    if (!error) {
      try {
        const getParkingByIdData = await getParkingById(id);
        res.status(200).json({ getParkingByIdData });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

module.exports = {
  handlerGetAllParkings,
  handlerGetParkingById,
};
