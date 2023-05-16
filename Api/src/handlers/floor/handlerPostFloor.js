// Controlador de los pisos del parqueadero
const createFloor = require("../../controllers/floor/postFloor");

// Handler para añadir pisos a un parqueadero
const handlerCreateFloor = async (req, res) => {
  const { name, amount, car_capacity, motorcycle_capacity } = req.body;
  const { id } = req.params;

  try {
    const newFloor = await createFloor(
      name,
      amount,
      car_capacity,
      motorcycle_capacity,
      id
    );
    if (newFloor) {
      res.status(200).json(newFloor);
    } else {
      res.status(404).json({
        message: "Parqueadero no encontrado o datos de busqueda incorrectos",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = handlerCreateFloor;
