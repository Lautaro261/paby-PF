const getAllVehicle = require("../controllers/getAllVehicle");


const handlerGetVehicle = async (req, res) => {
  // Get all vehicle

  try {
    const vehicleDB = await getAllVehicle()
    res.status(200).json({vehicleDB});
  } catch (error) {
    res.status(404).json(error.message);
  }
};


module.exports = handlerGetVehicle;

