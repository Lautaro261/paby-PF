const { Floor, Zone } = require("../db");

// Handler para obtener todas las zonas de un piso
const getAllZonesWithFloors = async (req, res) => {
  try {
    const zones = await Zone.findAll({
      include: [
        {
          model: Floor,
          attributes: ["id"],
        },
      ],
      attributes: ["id", "zone_status", "zone_number", "vehicle_type"],
    });

    res.status(200).json(zones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Handler para crear zonas a un piso
const createZones = async (req, res) => {
  try {
    const { floorId } = req.params;
    const floor = await Floor.findByPk(floorId);

    if (!floor) {
      return res.status(404).json({ message: "Floor not found" });
    }

    const { amount, car_capacity, motorcycle_capacity } = floor;

    const zones = [];
    let zoneNumber = 1;

    for (let i = 0; i < amount; i++) {
      const vehicleType = i < car_capacity ? "Automovil" : "Motocicleta";

      zones.push({
        zone_status: "Disponible",
        zone_number: zoneNumber.toString(),
        vehicle_type: vehicleType,
        floorId: floor.id,
      });

      zoneNumber++;
    }

    const createdZones = await Zone.bulkCreate(zones);

    res
      .status(201)
      .json({ message: "Zones created successfully", zones: createdZones });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating zones" });
  }
};

// Handler para obtener todas las zonas de un piso
const getZonesByFloorId = async (req, res) => {
  try {
    const floor = await Floor.findAll({
      attributes: ["id", "name", "amount"],
      include: [
        {
          model: Zone,
          as: "zonesFloor",
          attributes: ["id", "zone_status", "zone_number", "vehicle_type"],
        },
      ],
    });
    res.status(200).json(floor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { createZones, getAllZonesWithFloors, getZonesByFloorId };
