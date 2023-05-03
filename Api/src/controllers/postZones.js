const { Parking, Floor, Zone } = require("../db");

//// Controller para asignar zonas automaticamente a un piso
const createZones = async (id) => {
  // Verificar si el piso existe
  const floor = await Floor.findByPk(id);

  if (!floor) {
    // throw new Error("Piso no encontrado");
    return false;
  }

  const { car_capacity, motorcycle_capacity } = floor;

  const zones = [];
  let zoneNumber = 1;

  // Crear las zonas de carros
  for (let i = 0; i < car_capacity; i++) {
    zones.push({
      zone_status: "Disponible",
      zone_number: zoneNumber,
      vehicle_type: "Automovil",
      floorId: id,
    });
    zoneNumber++;
  }

  // Crear las zonas de motos
  for (let i = 0; i < motorcycle_capacity; i++) {
    zones.push({
      zone_status: "Disponible",
      zone_number: zoneNumber,
      vehicle_type: "Motocicleta",
      floorId: id,
    });
    zoneNumber++;
  }

  await Zone.bulkCreate(zones);

  return true;
};

module.exports = createZones;
