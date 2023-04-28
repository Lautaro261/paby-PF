const { User }= require('../db');

const postUser=async(id, name, identificacion,last_name,email,password,phone,country,city,address,neighborhood,photo)=>{
      await User.create({
        id,
        identificacion,
        name,
        last_name,
        email,
        password,
        phone,
        country,
        city,
        address,
        neighborhood,
        photo
    })
    
}

module.exports = postUser