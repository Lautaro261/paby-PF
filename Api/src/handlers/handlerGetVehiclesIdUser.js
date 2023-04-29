//const {User}= require('../db');
const {Vehicle} =require ("../db")
const handlerGetVehiclesIdUser = async(req, res)=>{
    const {idUser} = req.params
    try {
       
        const vehicles = await Vehicle.findAll({
            where: {userId: idUser},
            attributes: [ 
                "license_plate_id",
                "license_plate",
                "vehicle_tipe",
                "type_of_service",
                "car_brand",
                "car_model",
                "car_model_year",
                "car_color",
                "photo"
            ],
        })

        
        res.status(200).json(vehicles)
    } catch (error) {
        res.status(400).json({message: `No se encontraron vehiculos al usuario con el id ${idUser}`})
    }

}

module.exports=handlerGetVehiclesIdUser