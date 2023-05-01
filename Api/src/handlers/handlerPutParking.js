const updateParking = require("../controllers/putParking");

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
  try {
    const parking = await updateParking(id);
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
      res
        .status(200)
        .json({ message: "Parqueadero actualizado correctamente" });
    } else {
      res.status(404).json({
        message: "Parqueadero no encontrado o datos ingresados incorrectos",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = handlerUpdateParking;
