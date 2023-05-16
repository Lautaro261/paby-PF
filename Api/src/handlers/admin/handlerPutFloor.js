// Controlador de los pisos del parqueadero
const updateFloorById = require("../../controllers/floor/putFloor");
const { KEY_SECRET } = process.env;
const jwt = require("jsonwebtoken");

// Handler para modificar datos de pisos a un parqueadero
const handlerUpdateFloorById = async (req, res) => {
  const { id } = req.params;
  const { name, amount, car_capacity, motorcycle_capacity } = req.body;
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    if (!error) {
      try {
        const updatedFloor = await updateFloorById(
          id,
          name,
          amount,
          car_capacity,
          motorcycle_capacity
        );
        res.status(200).json({ updatedFloor });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(400).json({ message: "Error en la verificacion" });
    }
  });
};

module.exports = handlerUpdateFloorById;
