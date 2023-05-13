const jwt = require('jsonwebtoken')
require("dotenv").config();
const { KEY_SECRET } = process.env;
const getAllUsers = require('../../controllers/admin/getAllUser')

const handlerGetUsers = async (req, res)=>{

    jwt.verify(req.token,KEY_SECRET , async(error) =>{

        if(!error){

       try {
        
           const users = await getAllUsers()
           res.status(200).json(users)
       } catch (error) {
        
           res.status(401).json({message: 'ALGO SALIO MAL EN HANLDER GET USERS'})
       }
    } else{
         res.status(403).json({message: "Error en la verificacion"}) 
   
        }
             
    })


}

module.exports = handlerGetUsers
