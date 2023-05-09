const { Vehicle } = require("../db");
const { User } = require("../db");

const postVehicle = async (
  sub,
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
  
  
  const user = await User.findByPk(sub)
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
    userSub: user.sub

  });

 await user.addVehicle(newVehicle);

  return newVehicle;
};

module.exports = postVehicle;

