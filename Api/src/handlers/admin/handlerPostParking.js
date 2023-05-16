// Controlador del parqueadero
const createParking = require("../../controllers/parking/postParking");
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

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
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    if (!error) {
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
        res.status(200).json({ parking });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

module.exports = handlerCreateParking;
