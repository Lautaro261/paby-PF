// Controlador de los pisos del parqueadero
const {
  getAllFloors,
  getFloorsByParkingId,
} = require("../controllers/getFloor");

// Handler para obtener todos los pisos de todos los parqueaderos
const handlerGetAllFloors = async (req, res) => {
  try {
    const parkings = await getAllFloors();
    res.status(200).json(parkings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Handler para obtener los pisos de un parqueadero
const handlerGetFloorsByParkingId = async (req, res) => {
  const { id } = req.params;
  try {
    const floors = await getFloorsByParkingId(id);
    if (floors) {
      res.status(200).json(floors);
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
  handlerGetAllFloors,
  handlerGetFloorsByParkingId,
};
