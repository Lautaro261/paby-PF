// Controlador de los pisos del parqueadero
const updateFloorById = require("../../controllers/floor/putFloor");

// Handler para modificar datos de pisos a un parqueadero
const handlerUpdateFloorById = async (req, res) => {
  const { id } = req.params;
  const { name, amount, car_capacity, motorcycle_capacity } = req.body;

  try {
    const updatedFloor = await updateFloorById(
      id,
      name,
      amount,
      car_capacity,
      motorcycle_capacity
    );
    if (updatedFloor) {
      res.status(200).json({ message: "¡Piso actualizado correctamente!" });
    } else {
      res.status(404).json({
        message: "Piso no encontrado o datos ingresados incorrectos",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = handlerUpdateFloorById;
