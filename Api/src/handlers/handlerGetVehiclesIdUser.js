

const handlerGetVehiclesIdUser = (req, res)=>{

    try {
        res.status(200).json('todo ok')
    } catch (error) {
        res.status(400).json('salio mal')
    }

}

module.exports=handlerGetVehiclesIdUser