const getAllUsers = require('../controllers/getAllUser')

const handlerGetUsers = async (req, res)=>{
    try {
        const users = await getAllUsers()
        //console.log(users)
        res.status(200).json(users)
/*         res.status(200).json({message: 'ESTAMOS EN HANDLER GET USERS',
    name: "Armando Gomez",
    city: "Mexico",
    email: "armandogomez1509@gmail.com"

}) */
    } catch (error) {
        res.status(401).json({message: 'ALGO SALIO MAL EN HANLDER GET USERS'})
    }


}

/* Sex.hasMany(User);
User.belongsTo(Sex);
Document.hasMany(User);
User.belongsTo(Document); 
*/

module.exports = handlerGetUsers
