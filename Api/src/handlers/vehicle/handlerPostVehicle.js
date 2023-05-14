
const postVehicle =require("../../controllers/vehicle/postVehicle");


const handlerPostVehicle = async (req, res) => {
    
  const {
    sub,
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

  
    try {
    const vehicle = await postVehicle(
      sub,
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

    if(vehicle){

      res.status(202).json({message: 'Vehiculo creado',
    vehicle: vehicle,
    })
    }else{
      re.status(400).json({message: 'No se pudo crear el vehiculo',
    error: error.message,
    })
    }

  } catch (error) {
    res.status(404).json({message: 'No se pudo crear el vehiculo',
    error: error.message,
    })
  }
};

module.exports = handlerPostVehicle
