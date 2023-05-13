const { User } = require("../db");
const { Profile } = require("../db");
require("dotenv").config();

const { EMAIL_ADMIN, NAME_ADMIN } = process.env;

const postUser = async (sub, name, email, photo, password) => {
  const user = await User.findOne({ where: { sub: sub } });
  if (user) {
    console.log("Usuario ya existe");
    //return user
  }

  const newObjUser = {
    sub,
    name,
    email,
    photo,
  };


  if (password !== undefined || password !== null) {
    newObjUser.password = password;
  }

  if (newObjUser.email === EMAIL_ADMIN && newObjUser.name === NAME_ADMIN) {
    newObjUser.rol = "admin";
  }


  const newUser = await User.create(newObjUser);

  const findProfile = await Profile.findOne({ where: { userSub: sub } }); 

  if (!findProfile) {
    await Profile.create({ userSub: sub });
  }

  return newUser; 
};

module.exports = postUser;
