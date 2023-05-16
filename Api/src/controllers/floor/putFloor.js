const { Parking, Floor } = require("../../db");

// Controller para modificar datos de pisos a un parqueadero
const updateFloorById = async (
  idFloor,
  name,
  amount,
  car_capacity,
  motorcycle_capacity
) => {
  const floor = await Floor.findByPk(idFloor);
  if (floor) {
    const updatedFloor = await floor.update({
      name,
      amount,
      car_capacity,
      motorcycle_capacity,
    });
    return updatedFloor;
  } else {
    return {
      message: "Piso no encontrado o datos ingresados incorrectos",
    };
  }
};

module.exports = updateFloorById;
