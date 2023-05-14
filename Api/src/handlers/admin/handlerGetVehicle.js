const jwt = require('jsonwebtoken');
const getAllVehicle = require("../../controllers/admin/getAllVehicle");
require("dotenv").config();
const { KEY_SECRET } = process.env;

const handlerGetVehicle = async (req, res) => {
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    if (!error) {
      try {
        const vehicleDB = await getAllVehicle();
        res.status(200).json({ vehicleDB });
      } catch (error) {
        res.status(404).json(error.message);
      }
    } else {
      res.status(403).json({message: "Error en la verificacion"});
    }
  });
};

module.exports = handlerGetVehicle;
