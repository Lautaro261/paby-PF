const axios = require('axios')
const getAllVehicle =require("../controllers/getAllVehicle")


const handlerGetVehicle = async(req,res) =>{

    // Get all vehicle

    try {

        const vehicle = await getAllVehicle()
        console.log(vehicle);
        res.status(200).json({message: "todo salio bien en get vehicles"})
        
    } catch (error) {
        res.status(401).json({message: 'ALGO SALIO MAL EN HANLDER GET vehicles'})
    }


}