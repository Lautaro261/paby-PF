const putVehicle = require("../controllers/putVehicle");

const handlerPutVehicle = async (req, res) => {
  try {
    const { license_plate_id } = req.params;

    const {
      license_plate,
      vehicle_tipe,
      type_of_service,
      car_brand,
      car_model,
      car_model_year,
      car_color,
      photo,
    } = req.body;

    await putVehicle(
      license_plate_id,
      license_plate,
      vehicle_tipe,
      type_of_service,
      car_brand,
      car_model,
      car_model_year,
      car_color,
      photo
    );

    res.status(200).json({ message: "se modifico!" });
  } catch (error) {
    res.status(400).json({ message: "no se pudo modificar" });
  }
};

module.exports = handlerPutVehicle;
