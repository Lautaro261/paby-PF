const { User } = require('../db')
// const { Vehicle } = require(')
//const { Sex } = require('../db')
//const { Document } = require('../db')  

const getAllUsers = async(req, res)=>{
    const responseUsers = await User.findAll(/* {
        include: [{model: User }]
    } */)
    //console.log(responseUsers)

    return responseUsers
} 

module.exports = getAllUsers