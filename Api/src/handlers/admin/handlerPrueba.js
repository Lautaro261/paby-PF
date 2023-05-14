const jwt = require("jsonwebtoken");
require("dotenv").config();
const { KEY_SECRET } = process.env;


const handlerPrueba = (req, res)=>{

    jwt.verify(req.token, KEY_SECRET, (error, authData) =>{
    if(error){
        res.status(403).json("Error en la verificacion")
    } else{
        res.json({
            mensaje: "Post fue creado",
            authData
        })
    }
    
    
})


} 

module.exports = handlerPrueba