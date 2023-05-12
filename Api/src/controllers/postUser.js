const { User } = require("../db");
const { Profile } = require("../db");
require("dotenv").config();

const { EMAIL_ADMIN, NAME_ADMIN } = process.env

const postUser = async (sub, name, email, photo) => {
    
  const user = await User.findOne({ where: { sub:sub } })
  if(user){
    console.log("Usuario ya existe");
    //return user
  }
  
  const newObjUser = {
    sub,
    name,
    email,
    photo,
} 

// AQUIII VA LA LOGICA NUEVA 

// 1) BUSCO EL USER EN CASO QUE EXISTA 

if(newObjUser.email === EMAIL_ADMIN && newObjUser.name === NAME_ADMIN){
  newObjUser.rol = 'admin'
}
// 2) PREGUNTO SI USER.email=== ADMIN


  const newUser = await User.create(newObjUser); 


const findProfile = await Profile.findOne({ where: { userSub: sub } }); // BUSCA UN PERFIL CON EL SUB

 if (!findProfile) {
  await Profile.create({ userSub: sub });
} 

return newUser; ///FALTAN COSAS POR HACER
};

module.exports = postUser;
