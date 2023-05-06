const { Profile } = require("../db");

const PutProfile = async (
<<<<<<< HEAD
  userId,
=======
  sub,
>>>>>>> development
  nickname,
  phone,
  country,
  city,
  address,
  neighborhood
) => {
<<<<<<< HEAD
  const profileById = await Profile.findOne({ where: { userSub: userId } }); //AQUI TENGO EL PERFIL

  if (!profileById) {
    return "No se pudo editar el Perfil";
=======
  const profileById = await Profile.findOne({ where: { userSub: sub } }); //AQUI TENGO EL PERFIL

  if (!profileById) {
    return null;
>>>>>>> development
  }


  await profileById.update({
    nickname,
    phone,
    country,
    city,
    address,
    neighborhood,
  });
};

module.exports = PutProfile;
