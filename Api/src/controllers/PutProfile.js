const { Profile } = require("../db");

const PutProfile = async (
  userId,
  nickname,
  phone,
  country,
  city,
  address,
  neighborhood
) => {
  const profileById = await Profile.findOne({ where: { userSub: userId } }); //AQUI TENGO EL PERFIL

  if (!profileById) {
    return "No se pudo editar el Perfil";
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
