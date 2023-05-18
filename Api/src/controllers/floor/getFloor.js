const { Parking, Floor } = require("../../db");

// Controller para obtener todos los pisos de todos los parqueaderos
const getAllFloors = async () => {
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
  if (parkings.length === 0) {
    return { message: "No hay parqueaderos con pisos creados" };
  }
  return parkings;
};

// Controller para obtener los pisos de un parqueadero
const getFloorsByParkingId = async (id) => {
  const parking = await Parking.findByPk(id);
  if (parking) {
    const floors = await parking.getParkingFloors();
    return floors;
  } else {
    return {
      message: "Parqueadero no encontrado o datos ingresados incorrectos",
    };
  }
};

module.exports = {
  getAllFloors,
  getFloorsByParkingId,
};
