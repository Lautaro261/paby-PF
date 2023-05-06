const { User } = require("../db");
const { Profile } = require("../db");

const postUser = async (sub, name, email, photo) => {
  /*  const newObjUser = {
    sub,
    name,
    email,
    photo,
} */

  const newUser = await User.findOrCreate({
    //ENCUENTRA O CREA USER
    where: {
      sub: sub,
    },
    defaults: {
      sub: sub,
      name: name,
      email: email,
      photo: photo,
    },
  });

  const findProfile = await Profile.findOne({ where: { userSub: sub } }); // BUSCA UN PERFIL CON EL SUB

  if (!findProfile) {
    await Profile.create({ userSub: sub });
  }

  return newUser; ///FALTAN COSAS POR HACER
};

module.exports = postUser;
