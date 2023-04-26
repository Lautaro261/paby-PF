
const HandlerGetUsers =(req, res)=>{
    try {
        res.status(200).json({message: 'ESTAMOS EN HANDLER GET USERS',
    name: "Armando Gomez",
    city: "Mexico",
    email: "armandogomez1509@gmail.com"

})
    } catch (error) {
        res.status(401).json({message: 'ALGO SALIO MAL EN HANLDER GET USERS'})
    }


}



module.exports = HandlerGetUsers
