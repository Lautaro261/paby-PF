const { Parking, Floor, Zone } = require("../../db");

//// Controller para obtener todas las zonas de los pisos
const getAllZonesWithFloors = async () => {
  const zones = await Zone.findAll({
    attributes: ["id", "zone_status", "zone_number", "vehicle_type", "floorId"],
    order: [["order", "ASC"]],
    // include: [
    //   {
    //     model: Floor,
    //     attributes: ["name", "parkingId"],
    //   },
    // ],
  });
  if (zones.length === 0) {
    return { message: "No hay pisos con zonas creadas" };
  }
  return zones;
};

//// Controller para ver todas las zonas de todos los pisos del parqueadero
const getZonesByParkingId = async (id) => {
  // Verificar si el parqueadero existe
  await Parking.findByPk(id);

  // Buscar todos los pisos asociados al parqueadero
  const floors = await Floor.findAll({
    where: { parkingId: id },
    attributes: ["id"],
  });

  // Buscar todas las zonas asociadas a cada piso
  const zones = await Zone.findAll({
    where: { floorId: floors.map((floor) => floor.id) },
    attributes: ["id", "zone_status", "zone_number", "vehicle_type", "floorId"],
    order: [["order", "ASC"]],
    // include: [
    //   {
    //     model: Floor,
    //     attributes: ["name", "parkingId"],
    //   },
    // ],
  });
  if (zones.length === 0) {
    return {
      message: "Parqueadero no encontrado o datos de busqueda incorrectos",
    };
  }
  return zones;
};

module.exports = {
  getAllZonesWithFloors,
  getZonesByParkingId,
};
