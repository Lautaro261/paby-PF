// Controlador de los pisos del parqueadero
const createFloor = require("../../controllers/floor/postFloor");
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

// Handler para añadir pisos a un parqueadero
const handlerCreateFloor = async (req, res) => {
  const { name, amount, car_capacity, motorcycle_capacity } = req.body;
  const { id } = req.params;
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    if (!error) {
      try {
        const newFloor = await createFloor(
          name,
          amount,
          car_capacity,
          motorcycle_capacity,
          id
        );
        res.status(200).json({ newFloor });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

module.exports = handlerCreateFloor;
