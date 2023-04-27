const { Vehicle } = require("../db");

const getAllVehicle = async (req, res) => {
  const responseVehicle = await Vehicle.findAll({}); //[{},{},{}] o {.... val: [{},{},{}]}

    console.log(responseVehicle);

  /* const vehicleDB = responseVehicle.map((e) => {
    return {
      license_plate: e.license_plate,
      vehicle_tipe: e.vehicle_tipe,
      type_of_service: e.type_of_service,
      car_brand: e.car_brand,
      car_model: e.car_model,
      car_model_year: e.car_model_year,
      car_color: e.car_color,
      photo: e.photo
    };
  }); */
  console.log(responseVehicle)
  return responseVehicle; // return responseVehicle o return responseVehicle.value
};

module.exports = getAllVehicle;
