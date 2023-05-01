const { Parking } = require("../db");

// Controller para crear un parqueadero
const createParking = async (
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
  const parking = await Parking.create({
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
};

module.exports = createParking;
