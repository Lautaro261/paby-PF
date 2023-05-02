// Controlador de los pisos del parqueadero
const createZones = require("../controllers/postZones");

//// Handler para asignar zonas automaticamente a un piso
const handlerCreateZones = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar si el piso existe
    const floor = await createZones(id);
    if (floor) {
      res.status(200).json({ message: "Zonas creadas correctamente" });
    } else {
      res.status(404).json({ message: "Piso no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = handlerCreateZones;
