const { Parking } = require("../../db");

// Controller para obtener todos los parqueaderos
const getAllParkings = async () => {
  const parkings = await Parking.findAll();
  if (parkings.length === 0) {
    return { message: "No hay parqueaderos creados" };
  }
  return parkings;
};

// Controller para obtener un parqueadero por id
const getParkingById = async (id) => {
  const parking = await Parking.findByPk(id);
  if (!parking) {
    return {
      message: "Parqueadero no encontrado o datos ingresados incorrectos",
    };
  }
  return parking;
};

module.exports = {
  getAllParkings,
  getParkingById,
};
