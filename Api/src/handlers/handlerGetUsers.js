const getAllUsers = require('../controllers/getAllUser')

const handlerGetUsers = async (req, res)=>{
    try {
        const users = await getAllUsers()
        //console.log(users)
        res.status(200).json(users)

    } catch (error) {
        res.status(401).json({message: 'ALGO SALIO MAL EN HANLDER GET USERS'})
    }


}

module.exports = handlerGetUsers
