const getUserId = require("../../controllers/user/getUserId");

const handlerGetUserId = async (req, res) => {
  const { idUser } = req.params;
  try {
    //consulta de base de datos
    const userAndProfile = await getUserId(idUser);
    if (userAndProfile) {
      res.status(200).json(userAndProfile);
    } else {
      res.status(400).json({ message: `No se encontro user con id: ${idUser}` });
    }
  } catch (error) {
    res.status(404).json("salio mal");
  }
};

module.exports = handlerGetUserId;
