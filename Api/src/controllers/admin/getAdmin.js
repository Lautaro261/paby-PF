const { User } = require("../../db");

const getAdmin = async (sub) => {
  const user = await User.findOne({ where: { sub: sub } });

  return user;
};

module.exports = getAdmin;
