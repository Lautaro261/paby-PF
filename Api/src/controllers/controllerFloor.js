const { Parking, Floor } = require("../db");

// Handler para obtener todos los pisos de todos los parqueaderos
const getAllFloors = async (req, res) => {
  try {
    const parkings = await Parking.findAll({
      attributes: ["id", "name", "nit"],
      include: [
        {
          model: Floor,
          as: "parkingFloors",
          attributes: [
            "id",
            "name",
            "amount",
            "car_capacity",
            "motorcycle_capacity",
          ],
        },
      ],
    });
    res.status(200).json(parkings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Handler para obtener los pisos de un parqueadero
const getFloorsByParkingId = async (req, res) => {
  const { id } = req.params;
  try {
    const parking = await Parking.findByPk(id);
    if (parking) {
      const floors = await parking.getParkingFloors();
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

// Handler para añadir pisos a un parqueadero
const createFloor = async (req, res) => {
  const { name, amount, car_capacity, motorcycle_capacity } = req.body;
  const { id } = req.params;

  try {
    const parking = await Parking.findByPk(id);
    if (parking) {
      const newFloor = await Floor.create({
        name,
        amount,
        car_capacity,
        motorcycle_capacity,
        parkingId: parking.id,
      });
      res.status(200).json(newFloor);
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

// Handler para modificar datos de pisos a un parqueadero
const updateFloorById = async (req, res) => {
  const { id } = req.params;
  const { name, amount, car_capacity, motorcycle_capacity } = req.body;

  try {
    const floor = await Floor.findByPk(id);
    if (floor) {
      const updatedFloor = await floor.update({
        name,
        amount,
        car_capacity,
        motorcycle_capacity,
      });
      res.status(200).json(updatedFloor);
    } else {
      res.status(404).json({
        message: "Piso no encontrado o datos de busqueda incorrectos",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {
  getAllFloors,
  getFloorsByParkingId,
  createFloor,
  updateFloorById,
};