const { Vehicle } = require("../db");
const getVehicleId = require("../controllers/getVehicleId");

const handlerGetVehicleId = async (req, res) => {
  const { license_plate_id } = req.params;

  try {
    const responseVehicleId = await getVehicleId(license_plate_id);

    if (responseVehicleId) {
      res.status(200).json(responseVehicleId);
    } else {
      res
        .status(404)
        .json({
          messege: `No se encontro vehicle por id: ${license_plate_id}`,
        });
    }
  } catch (error) {
    res
      .status(404)
      .json({ messege: "Catch no se encontro vehiculo, handlerGetVehicleId" });
  }
};

module.exports = handlerGetVehicleId;
