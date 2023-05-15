const { Vehicle } = require("../../db");

const getAllVehicle = async (req, res) => {
  const responseVehicle = await Vehicle.findAll();

  return responseVehicle;
};

module.exports = getAllVehicle;
