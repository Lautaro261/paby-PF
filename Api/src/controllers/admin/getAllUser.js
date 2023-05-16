const { User } = require("../../db");

const getAllUsers = async (req, res) => {
  const responseUsers = await User.findAll();

  return responseUsers;
};

module.exports = getAllUsers;
