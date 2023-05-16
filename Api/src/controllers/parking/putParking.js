const { Parking } = require("../../db");

// Controller para actualizar un parqueadero
const updateParking = async (
  id,
  name,
  nit,
  country,
  city,
  address,
  neighborhood,
  floors,
  fee,
  photo,
  regulation
) => {
  const parking = await Parking.findByPk(id);
  if (parking) {
    await parking.update({
      name,
      nit,
      country,
      city,
      address,
      neighborhood,
      floors,
      fee,
      photo,
      regulation,
    });
    return parking;
  } else {
    return {
      message: "Parqueadero no encontrado o datos ingresados incorrectos",
    };
  }
};

module.exports = updateParking;
