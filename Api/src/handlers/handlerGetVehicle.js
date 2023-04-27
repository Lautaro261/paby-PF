
const axios = require("axios");
const getAllVehicle = require("../controllers/getAllVehicle");


const handlerGetVehicle = async (req, res) => {
  // Get all vehicle
  //if (req.body.name)
  try {
    //onst vehicleDB = await axios.all([getAllVehicle()])
    //const allVehicle = [... vehicleDB]
    //res.status(200).json(allVehicle)
    const vehicleDB = await getAllVehicle()
    res.status(200).json({vehicleDB});
  } catch (error) {
    res.status(404).json(error.message);
  }
};


module.exports = handlerGetVehicle;

