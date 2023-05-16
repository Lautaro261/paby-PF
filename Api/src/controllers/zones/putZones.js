const { Parking, Floor, Zone } = require("../../db");

//// Controller para modificar el estado de disponibilidad y el nombre de una zona
const updateZone = async (id, zone_status, zone_number) => {
  const zone = await Zone.findByPk(id);

  if (zone) {
    await zone.update({ zone_status, zone_number });

    const zones = await Zone.findAll({
      order: [["order", "ASC"]],
    });

    return zones;
  } else {
    return { message: "Zona no encontrada o datos ingresados incorrectos" };
  }
};

module.exports = updateZone;
