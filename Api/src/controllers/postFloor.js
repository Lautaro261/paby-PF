const { Parking, Floor } = require("../db");

// Controller para añadir pisos a un parqueadero
const createFloor = async (
  name,
  amount,
  car_capacity,
  motorcycle_capacity,
  parkingId
) => {
  const parking = await Parking.findByPk(parkingId);
  if (parking) {
    const newFloor = await Floor.create({
      name,
      amount,
      car_capacity,
      motorcycle_capacity,
      parkingId: parking.id,
    });
    return newFloor;
  }
};

module.exports = createFloor;
