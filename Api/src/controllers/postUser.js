const { User }= require('../db');

const postUser=async(name, identificacion,last_name,email,password,phone,country,city,address,neighborhood,photo)=>{
    const response = await User.create({
        name,
        identificacion,
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
    console.log(response)
    
}

module.exports = postUser