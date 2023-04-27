const { Vehicle } = require("../db");

const postVehicle = async (
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
  const newVehicle = await Vehicle.create({
    license_plate_id,
    license_plate,
    vehicle_tipe,
    type_of_service,
    car_brand,
    car_model,
    car_model_year,
    car_color,
    photo,
  });
  console.log(newVehicle);
  return newVehicle;
};

module.exports = postVehicle;
