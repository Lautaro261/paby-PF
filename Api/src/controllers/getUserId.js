const {User} = require('../db');

const getUserId= async(idUser)=>{

    const userById = await User.findByPk(idUser);

    if(userById){
        return userById
    }else{
        return null
    }
}

module.exports=getUserId