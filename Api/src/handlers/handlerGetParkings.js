// Controlador del parqueadero
const { getAllParkings, getParkingById } = require("../controllers/getParking");

// Handler para obtener todos los parqueaderos
const handlerGetAllParkings = async (req, res) => {
  try {
    const parkings = await getAllParkings();
    if (parkings) {
      res.status(200).json(parkings);
    } else {
      res.status(404).json({ message: "No hay parqueaderos creados" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Handler para obtener un parqueadero por id
const handlerGetParkingById = async (req, res) => {
  const { id } = req.params;
  try {
    const parking = await getParkingById(id);
    if (parking) {
      res.status(200).json(parking);
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
  handlerGetAllParkings,
  handlerGetParkingById,
};
