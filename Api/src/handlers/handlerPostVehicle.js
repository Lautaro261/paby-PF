
const postVehicle =require("../controllers/postVehicle");


const handlerPostVehicle = async (req, res) => {
    
    try {
  const {
    license_plate_id,
    license_plate,
    vehicle_tipe,
    type_of_service,
    car_brand,
    car_model,
    car_model_year,
    car_color,
    photo,
  } = req.body;
    const vehicle = await postVehicle(
      license_plate_id,
      license_plate,
      vehicle_tipe,
      type_of_service,
      car_brand,
      car_model,
      car_model_year,
      car_color,
      photo,
    );
    res.status(202).json(vehicle)

  } catch (error) {
    res.status(400).json(error.message)
  }
};

module.exports = handlerPostVehicle
