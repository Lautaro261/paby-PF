const { Parking, Floor } = require("../db");

// Controller para modificar datos de pisos a un parqueadero
const updateFloorById = async (
  idFloor,
  name,
  amount,
  car_capacity,
  motorcycle_capacity
) => {
  const floor = await Floor.findByPk(idFloor);
  if (idFloor) {
    const updatedFloor = await floor.update({
      name,
      amount,
      car_capacity,
      motorcycle_capacity,
    });
    return updatedFloor;
  }
};

module.exports = updateFloorById;
