const { Vehicle } = require("../db.js");

const getVehicleId = async (license_plate_id) => {
  const vehicleById = await Vehicle.findByPk(license_plate_id);

  if (vehicleById) {
    return vehicleById;
  } else {
    return null;
  }
};

module.exports = getVehicleId;
