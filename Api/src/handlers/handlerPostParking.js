// Controlador del parqueadero
const createParking = require("../controllers/postParking");

// Handler para crear un parqueadero
const handlerCreateParking = async (req, res) => {
  const {
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
  } = req.body;
  try {
    const parking = await createParking(
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
    );
    res.status(200).json(parking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = handlerCreateParking;
