const jwt = require("jsonwebtoken");
require("dotenv").config();
const { KEY_SECRET } = process.env;

const getUserId = require("../../controllers/user/getUserId");

const handlerGetUserById = async (req, res) => {
  const { idUser } = req.params;
  jwt.verify(req.token, KEY_SECRET, async (error) => {
    if (!error) {
      try {
        const userAndProfile = await getUserId(idUser);
        if (userAndProfile) {
          res.status(200).json(userAndProfile);
        } else {
          res.status(400).json({ message: `No se encontro user con id: ${idUser}` });
        }
      } catch (error) {
        res.status(404).json("salio mal");
      }
    }else{
        res.status(403).json({message: "Error en la verificacion"})
    }
  });
};

module.exports = handlerGetUserById;
