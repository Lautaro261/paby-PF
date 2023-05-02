const getVehicleByBrand = require('../controllers/getVehicleByBrand');


const handlerGetVehicleByBrand = async(req, res)=>{
    try {
        const { car_brand } = req.params

        const vehicle = await getVehicleByBrand(car_brand)

        if(vehicle === null){
            res.status(404).json({message: `No se puso encontrar vehcile : ${car_brand}`})
        }else{
            res.status(200).json(vehicle)
        }
    } catch (error) {
        res.status(400).json({message: 'No se encontro vehicle por name'})
    }
}

module.exports= handlerGetVehicleByBrand;