const { User } = require("../../db");
const { Profile } = require("../../db");

const getUserId = async (idUser) => {
  const userById = await User.findByPk(idUser);

  const profileById = await Profile.findOne({
    where: { userSub: userById.sub },
  });

  const userAndProfile = { userById, profileById };

  /* if(userById){
        return userById
    }else{
        return null
    } */

  return userAndProfile;
};

module.exports = getUserId;
