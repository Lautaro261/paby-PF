const { Parking } = require("../db");

// Controller para obtener todos los parqueaderos
const getAllParkings = async () => {
  const parkings = await Parking.findAll();
  return parkings;
};

// Controller para obtener un parqueadero por id
const getParkingById = async (id) => {
  const parking = await Parking.findByPk(id);
  return parking;
};

module.exports = {
  getAllParkings,
  getParkingById,
};
