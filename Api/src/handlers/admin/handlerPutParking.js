// Controlador del parqueadero
const updateParking = require("../../controllers/parking/putParking");
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

// Handler para actualizar un parqueadero
const handlerUpdateParking = async (req, res) => {
  const { id } = req.params;
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
        const parking = await updateParking(
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

module.exports = handlerUpdateParking;
