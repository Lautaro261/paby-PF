const { Profile } = require("../../db");

const PutProfile = async (
  sub,
  nickname,
  phone,
  country,
  city,
  address,
  neighborhood
) => {
  const profileById = await Profile.findOne({ where: { userSub: sub } });

  if (!profileById) {
    return null;
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
