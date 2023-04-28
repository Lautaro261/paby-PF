const getUserId = require("../controllers/getUserId");


const handlerGetUserId = async (req, res)=>{
    const {idUser} = req.params
try {
    //consulta de base de datos
    const user = await getUserId(idUser)
    if(user){
        res.status(200).json(user)
    }else{
        res.status(400).json({message: `No se encontro user con id: ${idUser}`})
    }
} catch (error) {
    res.status(404).json('salio mal')
}
}

module.exports = handlerGetUserId