const { Vehicle } = require('../db');

const getVehicleByBrand = async(car_brand)=>{

    const resVehicle = await Vehicle.findOne({
        where : { car_brand: car_brand}
    })

   // console.log(resVehicle)

    return resVehicle
}

module.exports = getVehicleByBrand;



