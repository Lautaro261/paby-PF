const { Vehicle } = require("../db");

const putVehicle = async (
  license_plate_id,
  license_plate,
  vehicle_tipe,
  type_of_service,
  car_brand,
  car_model,
  car_model_year,
  car_color,
  photo
) => {
  console.log(car_color, "linea 13 de controller");
  const vehicle = await Vehicle.findByPk(license_plate_id);
  if (vehicle) {
    await vehicle.update({
      license_plate,
      vehicle_tipe,
      type_of_service,
      car_brand,
      car_model,
      car_model_year,
      car_color,
      photo,
    });
  }
  console.log(vehicle);
  return vehicle;
};

module.exports = putVehicle;
