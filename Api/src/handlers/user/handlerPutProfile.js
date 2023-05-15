const PutProfile = require("../../controllers/user/PutProfile");

const handlerPutProfile = async (req, res) => {
  try {
    const { sub, nickname, phone, country, city, address, neighborhood } =
      req.body;

    const upProfile = await PutProfile(
      sub,
      nickname,
      phone,
      country,
      city,
      address,
      neighborhood
    );

    if (upProfile !== null) {
      res.status(200).json({ message: "se modifico correctamente el perfil!" });
    } else {
      res.status(400).json({ message: "No se encontro el perfil", sub: sub });
    }
  } catch (error) {
    res.status(400).json({ message: "No se pudo modificar el perfil", error: error.message });
  }
};

module.exports = handlerPutProfile;
