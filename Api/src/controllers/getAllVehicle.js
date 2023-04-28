const { Vehicle } = require("../db");

const getAllVehicle = async (req, res) => {
  const responseVehicle = await Vehicle.findAll(); //[{},{},{}] o {.... val: [{},{},{}]}

  return responseVehicle; // return responseVehicle o return responseVehicle.value
};

module.exports = getAllVehicle;
