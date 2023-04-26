const { Parking, Floor } = require("../db");

// Handler para obtener todos los pisos de todos parqueadero
const getAllFloors = async (req, res) => {
  try {
    const floors = await Floor.findAll({
      include: [{ model: Parking, as: "parkingFloors" }],
    });
    res.json(floors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Handler para obtener los pisos de un parqueadero
const getFloorsByParkingId = async (req, res) => {
  const { id } = req.params;
  try {
    const parking = await Parking.findByPk(id, { include: "parkingFloors" });
    if (parking) {
      res.json(parking.parkingFloors);
    } else {
      res.status(404).json({ message: "Parqueadero no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {
  getAllFloors,
  getFloorsByParkingId,
};
