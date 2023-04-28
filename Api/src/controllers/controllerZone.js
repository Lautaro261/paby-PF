const { Parking, Floor, Zone } = require("../db");

//// Handler para obtener todas las zonas de los pisos
const getAllZonesWithFloors = async (req, res) => {
  try {
    const zones = await Zone.findAll({
      attributes: [
        "id",
        "zone_status",
        "zone_number",
        "vehicle_type",
        "floorId",
      ],
    });

    res.status(200).json(zones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

//// Handler para asignar zonas automaticamente a un piso
const createZones = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar si el piso existe
    const floor = await Floor.findByPk(id);
    if (!floor) {
      return res
        .status(404)
        .json({ message: "Piso no existe o datos ingresados incorrectos" });
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

    res.status(201).json({ message: "Zonas creadas correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

//// Handler para ver todas las zonas de todos los pisos del parqueadero
async function getAllZones(req, res) {
  try {
    const zones = await Zone.findAll({
      include: [
        {
          model: Floor,
          attributes: ["name", "parkingId"],
        },
      ],
    });

    res.status(200).json(zones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

//// Handler para modificar el estado de disponibilidad y el nombre de una zona
async function updateZone(req, res) {
  try {
    const { id } = req.params;
    const { zone_status, zone_number } = req.body;

    const zone = await Zone.findByPk(id);

    if (!zone) {
      res.status(404).json({ message: "Zona no encontrada" });
    }

    await zone.update({ zone_status, zone_number });

    res.status(200).json({ message: "¡Zona actualizada correctamente!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

module.exports = {
  createZones,
  getAllZonesWithFloors,
  getAllZones,
  updateZone,
};
