const { User } = require("../../db");

const deleteUserLog = async (sub, delet) => {
  let userDelete;
  const findUser = await User.findOne({ where: { sub: sub } });

  findUser[delet] ? (userDelete = false) : (userDelete = true);

  const user = await User.update(
    { [delet]: userDelete },
    { where: { sub: sub } }
  );
  return user;
};

module.exports = deleteUserLog;
