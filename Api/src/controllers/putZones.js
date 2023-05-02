const { Parking, Floor, Zone } = require("../db");

//// Controller para modificar el estado de disponibilidad y el nombre de una zona
const updateZone = async (id, zone_status, zone_number) => {
  const zone = await Zone.findByPk(id);

  if (!zone) {
    throw new Error("Zona no encontrada");
  }

  await zone.update({ zone_status, zone_number });

  return true;
};

module.exports = updateZone;
